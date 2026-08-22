import server from '../../dist/ssr/index.js';

export default (request) => server.fetch(request);

export const config = {
	path: '/*',
	preferStatic: true,
};
