import { HMR } from 'pitlane:dev';
import type { Handle, RemixNode } from 'remix/ui';

import { mergeAssets } from '@pitlane/dev/runtime';

import clientAssets from '../entry.browser.ts?assets=client';
import serverAssets from '../entry.server.ts?assets=ssr';
import {
	defaultSocialImage,
	faviconHref,
	siteDescription,
	siteTitle,
	siteUrl,
	twitterCard,
} from './site-meta.ts';

type SocialImage = {
	alt: string;
	height: number;
	path: string;
	width: number;
};

export interface DocumentProps {
	children?: RemixNode;
	description?: string;
	head?: RemixNode;
	path?: string;
	socialImage?: SocialImage;
	socialType?: 'article' | 'website';
	title?: string;
}

export { siteTitle };

export function Document(handle: Handle<DocumentProps>) {
	return () => {
		let {
			children,
			description = siteDescription,
			head,
			path = '/',
			socialImage = defaultSocialImage,
			socialType = 'website',
			title = siteTitle,
		} = handle.props;
		let assets = mergeAssets(clientAssets, serverAssets);
		let canonicalUrl = new URL(path, siteUrl).href;
		let socialImageUrl = new URL(socialImage.path, siteUrl).href;

		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href={faviconHref} />
					<link rel="canonical" href={canonicalUrl} />
					<meta name="description" content={description} />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta property="og:type" content={socialType} />
					<meta property="og:url" content={canonicalUrl} />
					<meta property="og:site_name" content={siteTitle} />
					<meta property="og:image" content={socialImageUrl} />
					<meta property="og:image:width" content={String(socialImage.width)} />
					<meta property="og:image:height" content={String(socialImage.height)} />
					<meta property="og:image:alt" content={socialImage.alt} />
					<meta name="twitter:card" content={twitterCard} />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					<meta name="twitter:image" content={socialImageUrl} />
					<meta name="twitter:image:alt" content={socialImage.alt} />
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
