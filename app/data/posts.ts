import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Root } from 'mdast';
import { remark } from 'remark';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostSummary = {
	id: string;
	date: string;
	title: string;
};

export type PostData = PostSummary & {
	content: Root;
};

export function getSortedPostsData() {
	let fileNames = fs.readdirSync(postsDirectory);
	let allPostsData = fileNames.map((fileName) => {
		let id = fileName.replace(/\.md$/, '');
		let fullPath = path.join(postsDirectory, fileName);
		let fileContents = fs.readFileSync(fullPath, 'utf8');
		let matterResult = matter(fileContents);
		let { date, title } = readPostMetadata(matterResult.data, fullPath);

		return { id, date, title };
	});

	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData | undefined> {
	let fullPath = path.join(postsDirectory, `${id}.md`);
	if (!fs.existsSync(fullPath)) return undefined;

	let fileContents = fs.readFileSync(fullPath, 'utf8');
	let matterResult = matter(fileContents);
	let { date, title } = readPostMetadata(matterResult.data, fullPath);

	return {
		id,
		content: remark().parse(matterResult.content),
		date,
		title,
	};
}

function readPostMetadata(data: Record<string, unknown>, fullPath: string) {
	let { date, title } = data;
	if (!date || typeof date !== 'string') throw new Error(`Missing date in ${fullPath}`);
	if (!title || typeof title !== 'string') throw new Error(`Missing title in ${fullPath}`);
	return { date, title };
}
