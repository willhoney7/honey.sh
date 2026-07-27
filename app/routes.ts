import { get, route } from 'remix/routes';

export const routes = route({
	assets: get('/assets/*path'),
	home: '/',
	aboutWebsite: '/about-website',
	posts: route('/posts', {
		show: '/:id',
	}),
});
