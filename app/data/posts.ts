import { posts } from './posts.generated.ts';

export type PostSummary = {
	id: string;
	date: string;
	tags: readonly PostTag[];
	title: string;
};

export type PostTag = 'dev' | 'life';

export type PostData = PostSummary & {
	html: string;
};

export type PostsPage = {
	currentPage: number;
	posts: PostSummary[];
	totalPages: number;
};

export const postsPerPage = 5;

export function getSortedPostsData() {
	return posts
		.map(({ id, date, tags, title }) => ({ id, date, tags: [...tags], title }))
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(id: string): PostData | undefined {
	let post = posts.find((post) => post.id === id);
	if (!post) return undefined;

	return post;
}

export function getPostsPage(page: number): PostsPage | undefined {
	let allPosts = getSortedPostsData();
	let totalPages = Math.max(1, Math.ceil(allPosts.length / postsPerPage));
	if (!Number.isSafeInteger(page) || page < 1 || page > totalPages) return undefined;

	let start = (page - 1) * postsPerPage;
	return {
		currentPage: page,
		posts: allPosts.slice(start, start + postsPerPage),
		totalPages,
	};
}
