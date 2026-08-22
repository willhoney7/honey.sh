import type { Handle } from 'remix/ui';

import { postTags, type PostsPage, type PostTag } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { Document } from './document.tsx';
import { PostList } from './post-list.tsx';
import { SiteLayout } from './site-layout.tsx';

export function BlogPage(handle: Handle<PostsPage>) {
	return () => {
		let { currentPage, posts, selectedTag, totalPages } = handle.props;
		let title = selectedTag ? `${selectedTag} posts` : 'Blog';
		if (currentPage > 1) title += ` – Page ${currentPage}`;

		return (
			<Document title={title}>
				<SiteLayout>
					<section>
						<h1 className="my-4 text-[2rem] leading-[1.3] font-extrabold">Blog</h1>
						<TagFilters selectedTag={selectedTag} />
						<PostList posts={posts} />
						<Pagination
							currentPage={currentPage}
							selectedTag={selectedTag}
							totalPages={totalPages}
						/>
					</section>
				</SiteLayout>
			</Document>
		);
	};
}

function TagFilters(handle: Handle<{ selectedTag?: PostTag }>) {
	return () => {
		let { selectedTag } = handle.props;

		return (
			<nav aria-label="Filter blog posts by tag" className="mb-8 flex flex-wrap gap-2">
				<TagFilter active={!selectedTag} href={routes.blog.href()} label="All" />
				{postTags.map((tag) => (
					<TagFilter
						active={selectedTag === tag}
						href={routes.blogTag.href({ tag })}
						key={tag}
						label={tag}
					/>
				))}
			</nav>
		);
	};
}

function TagFilter(handle: Handle<{ active: boolean; href: string; label: string }>) {
	return () => {
		let { active, href, label } = handle.props;
		let stateClassNames = active
			? 'bg-neutral-800 text-white! ring-neutral-800'
			: 'bg-white text-neutral-700! ring-neutral-300 hover:bg-neutral-50';

		return (
			<a
				aria-current={active ? 'page' : undefined}
				className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ring-inset transition-colors ${stateClassNames}`}
				href={href}
			>
				{label}
			</a>
		);
	};
}

function Pagination(
	handle: Handle<{ currentPage: number; selectedTag?: PostTag; totalPages: number }>
) {
	return () => {
		let { currentPage, selectedTag, totalPages } = handle.props;
		let previousPage = currentPage - 1;
		let nextPage = currentPage + 1;

		return (
			<nav
				aria-label="Blog pagination"
				className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm"
			>
				<PaginationLink
					direction="previous"
					page={previousPage}
					selectedTag={selectedTag}
					totalPages={totalPages}
				/>
				<span className="text-neutral-500">
					Page {currentPage} of {totalPages}
				</span>
				<PaginationLink
					direction="next"
					page={nextPage}
					selectedTag={selectedTag}
					totalPages={totalPages}
				/>
			</nav>
		);
	};
}

function PaginationLink(
	handle: Handle<{
		direction: 'next' | 'previous';
		page: number;
		selectedTag?: PostTag;
		totalPages: number;
	}>
) {
	return () => {
		let { direction, page, selectedTag, totalPages } = handle.props;
		let label = direction === 'previous' ? '← Previous' : 'Next →';
		let alignment = direction === 'previous' ? 'text-left' : 'text-right';
		let disabled = page < 1 || page > totalPages;

		if (disabled) {
			return (
				<span aria-disabled="true" className={`w-24 text-neutral-300 ${alignment}`}>
					{label}
				</span>
			);
		}

		let href = getBlogPageHref(page, selectedTag);
		return (
			<a
				className={`w-24 font-medium ${alignment}`}
				href={href}
				rel={direction === 'previous' ? 'prev' : 'next'}
			>
				{label}
			</a>
		);
	};
}

function getBlogPageHref(page: number, selectedTag?: PostTag) {
	if (selectedTag) {
		return page === 1
			? routes.blogTag.href({ tag: selectedTag })
			: routes.blogTagPage.href({ page: String(page), tag: selectedTag });
	}

	return page === 1 ? routes.blog.href() : routes.blogPage.href({ page: String(page) });
}
