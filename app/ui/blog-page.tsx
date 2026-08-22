import type { Handle } from 'remix/ui';

import type { PostsPage } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { Document } from './document.tsx';
import { PostList } from './post-list.tsx';
import { SiteLayout } from './site-layout.tsx';

export function BlogPage(handle: Handle<PostsPage>) {
	return () => {
		let { currentPage, posts, totalPages } = handle.props;

		return (
			<Document title={currentPage === 1 ? 'Blog' : `Blog – Page ${currentPage}`}>
				<SiteLayout>
					<section>
						<h1 className="my-4 text-[2rem] leading-[1.3] font-extrabold">Blog</h1>
						<PostList posts={posts} />
						<Pagination currentPage={currentPage} totalPages={totalPages} />
					</section>
				</SiteLayout>
			</Document>
		);
	};
}

function Pagination(handle: Handle<{ currentPage: number; totalPages: number }>) {
	return () => {
		let { currentPage, totalPages } = handle.props;
		let previousPage = currentPage - 1;
		let nextPage = currentPage + 1;

		return (
			<nav
				aria-label="Blog pagination"
				className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm"
			>
				<PaginationLink direction="previous" page={previousPage} totalPages={totalPages} />
				<span className="text-neutral-500">
					Page {currentPage} of {totalPages}
				</span>
				<PaginationLink direction="next" page={nextPage} totalPages={totalPages} />
			</nav>
		);
	};
}

function PaginationLink(
	handle: Handle<{ direction: 'next' | 'previous'; page: number; totalPages: number }>
) {
	return () => {
		let { direction, page, totalPages } = handle.props;
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

		let href = page === 1 ? routes.blog.href() : routes.blogPage.href({ page: String(page) });
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
