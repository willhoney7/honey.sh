import type { Handle } from 'remix/ui';

import type { PostSummary } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { Date } from './date.tsx';
import { Document, siteTitle } from './document.tsx';
import { SiteLayout } from './site-layout.tsx';

export function HomePage(handle: Handle<{ allPostsData: PostSummary[] }>) {
	return () => {
		let { allPostsData } = handle.props;

		return (
			<Document title={siteTitle}>
				<SiteLayout home>
					<section className="heading-md">
						<p>
							Hi! 👋 <br />
							<br />I sit at the intersection of engineering, product, and design. I
							like to focus on excellent user experiences and pragmatism.
						</p>
						<p>
							I've been at this for 15+ years now. I got my start making apps for the
							webOS platform. You can read more about my programming journey in{' '}
							<a href={routes.posts.show.href({ id: 'my-programming-journey' })}>
								this blog post
							</a>
							.
						</p>
						<p>
							I work at{' '}
							<a href="https://ori.io" target="_blank">
								Operational Results
							</a>{' '}
							as their CTO and live in Kansas City with my wife, three little girls,
							and dog named Winston.
						</p>
						<p>Some of my recent technical interests include:</p>
						<ul>
							<li>React and Tanstack Start</li>
							<li>TypeScript</li>
							<li>Rust</li>
							<li>Vite and Vitest</li>
							<li>Tailwind</li>
							<li>Prettier</li>
						</ul>
						<p>Some of my non-technical interests include:</p>
						<ul>
							<li>
								Music and{' '}
								<a href="https://stats.fm/user/will7?range=lifetime">
									obsessively tracking my listening habits.
								</a>
							</li>
							<li>Pickleball and trying not to be overly competitive.</li>
							<li>
								Introducing my kids to Pokemon Fire Red and other childhood
								classics.
							</li>
							<li>Watching TV shows.</li>
						</ul>
						<p>
							Welcome to the fifth iteration of my{' '}
							<a href={routes.aboutWebsite.href()}>website</a>.
						</p>
					</section>
					<section className="heading-md padding-1px">
						<h2 className="heading-lg">Blog</h2>
						<ul className="list">
							{allPostsData.map(({ id, date, title }) => (
								<li className="list-item" key={id}>
									<a href={routes.posts.show.href({ id })}>{title}</a>
									<br />
									<small className="light-text">
										<Date dateString={date} />
									</small>
								</li>
							))}
						</ul>
					</section>
				</SiteLayout>
			</Document>
		);
	};
}
