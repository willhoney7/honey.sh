import type { Handle } from 'remix/ui';

import type { PostData } from '../data/posts.ts';
import { Date } from './date.tsx';
import { Document } from './document.tsx';
import { Markdown } from './markdown.tsx';
import { SiteLayout } from './site-layout.tsx';

export function PostPage(handle: Handle<{ postData: PostData }>) {
	return () => {
		let { postData } = handle.props;

		return (
			<Document title={postData.title}>
				<SiteLayout>
					<article>
						<h1 className="heading-xl">{postData.title}</h1>
						<div className="light-text">
							<Date dateString={postData.date} />
						</div>
						<Markdown content={postData.content} />
					</article>
				</SiteLayout>
			</Document>
		);
	};
}
