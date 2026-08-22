import { createController } from 'remix/router';

import { getPostsPage, getSortedPostsData, isPostTag } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { AboutWebsitePage } from '../ui/about-website-page.tsx';
import { BlogPage } from '../ui/blog-page.tsx';
import { HomePage } from '../ui/home-page.tsx';
import { WinstonPage } from '../ui/winston-page.tsx';

export default createController(routes, {
	actions: {
		home(context) {
			return context.render(<HomePage allPostsData={getSortedPostsData()} />);
		},
		blog(context) {
			return context.render(<BlogPage {...getPostsPage(1)!} />);
		},
		blogPage(context) {
			let postsPage = getPostsPage(Number(context.params.page));
			if (!postsPage) return new Response('Not Found', { status: 404 });

			return context.render(<BlogPage {...postsPage} />);
		},
		blogTag(context) {
			let { tag } = context.params;
			if (!isPostTag(tag)) return new Response('Not Found', { status: 404 });

			return context.render(<BlogPage {...getPostsPage(1, tag)!} />);
		},
		blogTagPage(context) {
			let { page, tag } = context.params;
			if (!isPostTag(tag)) return new Response('Not Found', { status: 404 });

			let postsPage = getPostsPage(Number(page), tag);
			if (!postsPage) return new Response('Not Found', { status: 404 });

			return context.render(<BlogPage {...postsPage} />);
		},
		aboutWebsite(context) {
			return context.render(<AboutWebsitePage />);
		},
		winston(context) {
			return context.render(<WinstonPage />);
		},
	},
});
