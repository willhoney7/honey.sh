import { posts } from './posts.generated.ts';

export type PostSummary = {
	id: string;
	date: string;
	title: string;
};

export type PostData = PostSummary & {
	html: string;
};

export function getSortedPostsData() {
	return posts
		.map(({ id, date, title }) => ({ id, date, title }))
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(id: string): PostData | undefined {
	let post = posts.find((post) => post.id === id);
	if (!post) return undefined;

	return post;
}
