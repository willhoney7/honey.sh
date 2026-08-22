import { route } from 'remix/routes';

export const routes = route({
	home: '/',
	aboutWebsite: '/about-website',
	posts: route('/posts', {
		show: '/:id',
	}),
});
