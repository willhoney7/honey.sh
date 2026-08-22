import type { Handle } from 'remix/ui';

import type { PostSummary } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { Date } from './date.tsx';
import { PostTags } from './post-tags.tsx';

export function PostList(handle: Handle<{ posts: PostSummary[] }>) {
	return () => {
		let { posts } = handle.props;

		return (
			<ul className="m-0 list-none p-0">
				{posts.map(({ id, date, tags, title }) => (
					<li className="mb-6" key={id}>
						<a className="text-xl font-semibold" href={routes.posts.show.href({ id })}>
							{title}
						</a>
						<div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
							<Date dateString={date} />
							<span aria-hidden="true" className="text-neutral-300">
								·
							</span>
							<PostTags tags={tags} />
						</div>
					</li>
				))}
			</ul>
		);
	};
}
