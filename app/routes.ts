import { route } from 'remix/routes';

export const routes = route({
	home: '/',
	blog: '/blog',
	blogPage: '/blog/page/:page',
	blogTag: '/blog/tags/:tag',
	blogTagPage: '/blog/tags/:tag/page/:page',
	aboutWebsite: '/about-website',
	posts: route('/posts', {
		show: '/:id',
	}),
});
