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
