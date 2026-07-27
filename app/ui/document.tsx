import type { Handle, RemixNode } from 'remix/ui';

export interface DocumentProps {
	children?: RemixNode;
	head?: RemixNode;
	title?: string;
}

export const siteTitle = 'Will Honey';

export function Document(handle: Handle<DocumentProps>) {
	return () => {
		let { children, head, title = siteTitle } = handle.props;

		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="/styles.css" />
					<meta name="description" content="The development blog of Will Honey" />
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
					<title>{title}</title>
					{head}
				</head>
				<body>{children}</body>
			</html>
		);
	};
}
