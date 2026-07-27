import { html } from 'remix/html-template';
import { createController } from 'remix/router';

import { getPostData } from '../../data/posts.ts';
import { routes } from '../../routes.ts';
import { formatDate } from '../../ui/date.tsx';
import { renderHtmlDocument } from '../controller.tsx';

export default createController(routes.posts, {
	actions: {
		async show({ params }) {
			let postData = await getPostData(params.id);
			if (!postData) return new Response('Not Found', { status: 404 });

			return renderHtmlDocument(
				postData.title,
				html`
					<div class="container">
						<header class="header">
							<a href="/">
								<img
									src="/images/me_2024_alt.jpg"
									class="header-image border-circle"
									alt="Will Honey with wife in 2024"
								/>
							</a>
							<h2 class="heading-lg">
								<a href="/" class="color-inherit">Will Honey</a>
							</h2>
						</header>
						<main class="main">
							<article>
								<h1 class="heading-xl">${postData.title}</h1>
								<div class="light-text">
									<time datetime="${postData.date}"
										>${formatDate(postData.date)}</time
									>
								</div>
								<div>${html.raw`${postData.contentHtml}`}</div>
							</article>
						</main>
						<div class="back-to-home"><a href="/">← Back to home</a></div>
						<footer class="social-links">
							<a
								href="https://twitter.com/tibfib"
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									alt="@Tibfib on Twitter"
									src="/images/social/iconmonstr-twitter.png"
								/>
							</a>
							<a href="mailto:hi@honey.sh" target="_blank" rel="noreferrer noopener">
								<img
									alt="Email hi@honey.sh"
									src="/images/social/iconmonstr-email.png"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/will-honey/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									alt="Will Honey on LinkedIn"
									src="/images/social/iconmonstr-linkedin.png"
								/>
							</a>
							<a
								href="https://github.com/willhoney7"
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									alt="@willhoney7 on Github"
									src="/images/social/iconmonstr-github.png"
								/>
							</a>
						</footer>
						<div class="winston-container" aria-hidden="true">
							<div class="winston"></div>
						</div>
					</div>
				`
			);
		},
	},
});
