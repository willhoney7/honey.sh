import { html } from 'remix/html-template';
import { createController } from 'remix/router';

import { getPostData } from '../../data/posts.ts';
import { routes } from '../../routes.ts';
import { formatDate } from '../../ui/date.tsx';
import { renderHtmlDocument, siteLayoutHtml } from '../html.ts';

export default createController(routes.posts, {
	actions: {
		async show({ params }) {
			let postData = await getPostData(params.id);
			if (!postData) return new Response('Not Found', { status: 404 });

			return renderHtmlDocument(
				postData.title,
				siteLayoutHtml(html`
					<article>
						<h1 class="heading-xl">${postData.title}</h1>
						<div class="light-text">
							<time datetime="${postData.date}">${formatDate(postData.date)}</time>
						</div>
						<div>${html.raw`${postData.contentHtml}`}</div>
					</article>
				`)
			);
		},
	},
});
