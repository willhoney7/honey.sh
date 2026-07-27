import { html } from 'remix/html-template';
import { createController } from 'remix/router';

import { assetServer } from '../assets.ts';
import { getSortedPostsData } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { AboutWebsitePage } from '../ui/about-website-page.tsx';
import { HomePage } from '../ui/home-page.tsx';

export default createController(routes, {
	actions: {
		async assets(context) {
			return (
				(await assetServer.fetch(context.request)) ??
				new Response('Not Found', { status: 404 })
			);
		},
		home(context) {
			return context.render(<HomePage allPostsData={getSortedPostsData()} />);
		},
		aboutWebsite(context) {
			return context.render(<AboutWebsitePage />);
		},
	},
});

export function renderHtmlDocument(
	title: string,
	body: ReturnType<typeof html>,
	init?: ResponseInit
) {
	return new Response(
		String(html`
			<!doctype html>
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="/styles.css" />
					<meta name="description" content="The development blog of Will Honey" />
					<meta name="og:title" content="Will Honey" />
					<meta name="twitter:card" content="summary_large_image" />
					<title>${title}</title>
				</head>
				<body>
					${body}
				</body>
			</html>
		`),
		{
			...init,
			headers: {
				'Content-Type': 'text/html; charset=utf-8',
				...Object.fromEntries(new Headers(init?.headers)),
			},
		}
	);
}
