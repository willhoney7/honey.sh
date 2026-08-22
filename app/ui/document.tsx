import { HMR } from 'pitlane:dev';
import type { Handle, RemixNode } from 'remix/ui';

import { mergeAssets } from '@pitlane/dev/runtime';

import clientAssets from '../entry.browser.ts?assets=client';
import serverAssets from '../entry.server.ts?assets=ssr';
import { faviconHref, siteDescription, siteTitle, twitterCard } from './site-meta.ts';

export interface DocumentProps {
	children?: RemixNode;
	head?: RemixNode;
	title?: string;
}

export { siteTitle };

export function Document(handle: Handle<DocumentProps>) {
	return () => {
		let { children, head, title = siteTitle } = handle.props;
		let assets = mergeAssets(clientAssets, serverAssets);

		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href={faviconHref} />
					<meta name="description" content={siteDescription} />
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content={twitterCard} />
					<title>{title}</title>
					{assets.css.map((attrs) => (
						<link key={attrs.href} {...attrs} rel="stylesheet" />
					))}
					{assets.js.map((attrs) => (
						<link key={attrs.href} {...attrs} rel="modulepreload" />
					))}
					{head}
				</head>
				<body className="min-h-screen bg-white dark:bg-sky-950">
					{children}
					<HMR />
					<script type="module" src={clientAssets.entry}></script>
				</body>
			</html>
		);
	};
}
