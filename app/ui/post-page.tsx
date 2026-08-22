import type { Handle } from 'remix/ui';

import type { PostData } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { Date } from './date.tsx';
import { Document } from './document.tsx';
import { PostTags } from './post-tags.tsx';
import { SiteLayout } from './site-layout.tsx';

export function PostPage(handle: Handle<{ postData: PostData }>) {
	return () => {
		let { postData } = handle.props;

		return (
			<Document title={postData.title}>
				<SiteLayout section="blog">
					<article>
						<div className="mb-6">
							<a href={routes.blog.href()}>← Back to blog</a>
						</div>
						<h1 className="my-4 text-[2rem] leading-[1.3] font-extrabold">
							{postData.title}
						</h1>
						<div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
							<Date dateString={postData.date} />
							<span aria-hidden="true" className="text-neutral-300">
								·
							</span>
							<PostTags tags={postData.tags} />
						</div>
						<div
							className="prose prose-neutral mt-8 max-w-none prose-a:text-red-800"
							innerHTML={postData.html}
						/>
					</article>
				</SiteLayout>
			</Document>
		);
	};
}
