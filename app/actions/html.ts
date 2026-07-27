import { html } from 'remix/html-template';

import { siteTitle } from '../ui/document.tsx';

type SafeHtml = ReturnType<typeof html>;

export function renderHtmlDocument(title: string, body: SafeHtml, init?: ResponseInit) {
	return new Response(
		String(html`
			<!doctype html>
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="/styles.css" />
					<meta name="description" content="The development blog of Will Honey" />
					<meta name="og:title" content="${siteTitle}" />
					<meta name="twitter:card" content="summary_large_image" />
					<title>${title}</title>
				</head>
				<body>
					${body}
				</body>
			</html>
		`),
		{
			...init,
			headers: {
				'Content-Type': 'text/html; charset=utf-8',
				...Object.fromEntries(new Headers(init?.headers)),
			},
		}
	);
}

export function siteLayoutHtml(body: SafeHtml, options: { home?: boolean } = {}) {
	return html`
		<div class="container">
			<header class="header">${options.home ? homeHeaderHtml() : pageHeaderHtml()}</header>
			<main class="main">${body}</main>
			${options.home
				? null
				: html`<div class="back-to-home"><a href="/">← Back to home</a></div>`}
			${socialLinksHtml()} ${bouncingWinstonHtml()}
		</div>
	`;
}

function homeHeaderHtml() {
	return html`
		<img
			src="/images/me_2024_alt.jpg"
			class="header-home-image border-circle"
			alt="Will Honey with wife in 2024"
		/>
		<h1 class="heading-2xl">Will Honey</h1>
	`;
}

function pageHeaderHtml() {
	return html`
		<a href="/">
			<img
				src="/images/me_2024_alt.jpg"
				class="header-image border-circle"
				alt="Will Honey with wife in 2024"
			/>
		</a>
		<h2 class="heading-lg"><a href="/" class="color-inherit">Will Honey</a></h2>
	`;
}

function socialLinksHtml() {
	return html`
		<footer class="social-links">
			<a href="https://twitter.com/tibfib" target="_blank" rel="noreferrer noopener">
				<img alt="@Tibfib on Twitter" src="/images/social/iconmonstr-twitter.png" />
			</a>
			<a href="mailto:hi@honey.sh" target="_blank" rel="noreferrer noopener">
				<img alt="Email hi@honey.sh" src="/images/social/iconmonstr-email.png" />
			</a>
			<a
				href="https://www.linkedin.com/in/will-honey/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img alt="Will Honey on LinkedIn" src="/images/social/iconmonstr-linkedin.png" />
			</a>
			<a href="https://github.com/willhoney7" target="_blank" rel="noreferrer noopener">
				<img alt="@willhoney7 on Github" src="/images/social/iconmonstr-github.png" />
			</a>
		</footer>
	`;
}

function bouncingWinstonHtml() {
	return html`
		<div class="winston-container" aria-hidden="true">
			<div class="winston"></div>
		</div>
	`;
}
