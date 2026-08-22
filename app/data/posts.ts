import { posts } from './posts.generated.ts';

export type PostSummary = {
	id: string;
	date: string;
	tags: readonly PostTag[];
	title: string;
};

export const postTags = ['dev', 'life'] as const;

export type PostTag = (typeof postTags)[number];

export type PostData = PostSummary & {
	html: string;
};

export type PostsPage = {
	currentPage: number;
	posts: PostSummary[];
	selectedTag?: PostTag;
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

export function getPostsPage(page: number, selectedTag?: PostTag): PostsPage | undefined {
	let allPosts = getSortedPostsData().filter(
		(post) => !selectedTag || post.tags.includes(selectedTag)
	);
	let totalPages = Math.max(1, Math.ceil(allPosts.length / postsPerPage));
	if (!Number.isSafeInteger(page) || page < 1 || page > totalPages) return undefined;

	let start = (page - 1) * postsPerPage;
	return {
		currentPage: page,
		posts: allPosts.slice(start, start + postsPerPage),
		selectedTag,
		totalPages,
	};
}

export function isPostTag(value: string): value is PostTag {
	return postTags.some((tag) => tag === value);
}
