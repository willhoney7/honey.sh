import type { Handle, RemixNode } from 'remix/ui';

import { routes } from '../routes.ts';
import {
	faviconHref,
	siteDescription,
	siteTitle,
	stylesheetHref,
	twitterCard,
} from './site-meta.ts';

export interface DocumentProps {
	children?: RemixNode;
	head?: RemixNode;
	title?: string;
}

export { siteTitle };

export function Document(handle: Handle<DocumentProps>) {
	return () => {
		let { children, head, title = siteTitle } = handle.props;

		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href={faviconHref} />
					<link rel="stylesheet" href={stylesheetHref} />
					<meta name="description" content={siteDescription} />
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content={twitterCard} />
					<title>{title}</title>
					{head}
				</head>
				<body>
					{children}
					<script
						type="module"
						src={routes.assets.href({ path: 'app/assets/entry.ts' })}
					></script>
				</body>
			</html>
		);
	};
}
