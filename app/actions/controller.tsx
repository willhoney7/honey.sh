import { createController } from 'remix/router';

import { getSortedPostsData } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { AboutWebsitePage } from '../ui/about-website-page.tsx';
import { HomePage } from '../ui/home-page.tsx';

export default createController(routes, {
	actions: {
		home(context) {
			return context.render(<HomePage allPostsData={getSortedPostsData()} />);
		},
		aboutWebsite(context) {
			return context.render(<AboutWebsitePage />);
		},
	},
});
