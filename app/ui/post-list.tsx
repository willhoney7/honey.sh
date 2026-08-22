import type { Handle } from 'remix/ui';

import type { PostSummary } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { Date } from './date.tsx';

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
							<span className="inline-flex gap-1.5">
								{tags.map((tag) => (
									<span className={tagClassNames[tag]} key={tag}>
										{tag}
									</span>
								))}
							</span>
						</div>
					</li>
				))}
			</ul>
		);
	};
}

export const tagClassNames = {
	dev: 'inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 ring-inset',
	life: 'inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800 ring-1 ring-amber-200 ring-inset',
} as const;
