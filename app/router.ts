import { staticFiles } from 'remix/middleware/static';
import { createRouter, type MiddlewareContext } from 'remix/router';

import rootController from './actions/controller.tsx';
import postsController from './actions/posts/controller.tsx';
import { render } from './middleware/render.tsx';
import { routes } from './routes.ts';

type AppContext = MiddlewareContext<[ReturnType<typeof render>]>;

declare module 'remix/router' {
	interface RouterTypes {
		context: AppContext;
	}
}

export const router = createRouter<AppContext>({
	middleware: [staticFiles('./public', { index: false }), render()],
});

router.map(routes, rootController);
router.map(routes.posts, postsController);
