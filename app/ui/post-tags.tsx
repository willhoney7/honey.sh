import type { Handle } from 'remix/ui';

import type { PostTag } from '../data/posts.ts';
import { routes } from '../routes.ts';

export function PostTags(handle: Handle<{ tags: readonly PostTag[] }>) {
	return () => {
		let { tags } = handle.props;

		return (
			<span className="inline-flex gap-1.5">
				{tags.map((tag) => (
					<a className={tagClassNames[tag]} href={routes.blogTag.href({ tag })} key={tag}>
						{tag}
					</a>
				))}
			</span>
		);
	};
}

const tagClassNames = {
	dev: 'inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700! ring-1 ring-sky-200 ring-inset transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600',
	life: 'inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800! ring-1 ring-amber-200 ring-inset transition-colors hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600',
} as const;
