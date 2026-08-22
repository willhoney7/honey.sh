import type { Handle } from 'remix/ui';

import type { PostData } from '../data/posts.ts';
import { Date } from './date.tsx';
import { Document } from './document.tsx';
import { tagClassNames } from './post-list.tsx';
import { SiteLayout } from './site-layout.tsx';

export function PostPage(handle: Handle<{ postData: PostData }>) {
	return () => {
		let { postData } = handle.props;

		return (
			<Document title={postData.title}>
				<SiteLayout>
					<article>
						<h1 className="my-4 text-[2rem] leading-[1.3] font-extrabold">
							{postData.title}
						</h1>
						<div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
							<Date dateString={postData.date} />
							<span aria-hidden="true" className="text-neutral-300">
								·
							</span>
							<span className="inline-flex gap-1.5">
								{postData.tags.map((tag) => (
									<span className={tagClassNames[tag]} key={tag}>
										{tag}
									</span>
								))}
							</span>
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
