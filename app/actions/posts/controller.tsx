import { createController } from 'remix/router';

import { getPostData } from '../../data/posts.ts';
import { routes } from '../../routes.ts';
import { PostPage } from '../../ui/post-page.tsx';

export default createController(routes.posts, {
	actions: {
		async show(context) {
			let { params } = context;
			let postData = await getPostData(params.id);
			if (!postData) return new Response('Not Found', { status: 404 });

			return context.render(<PostPage postData={postData} />);
		},
	},
});
