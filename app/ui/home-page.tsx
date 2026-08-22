import type { Handle } from 'remix/ui';

import type { PostSummary } from '../data/posts.ts';
import { routes } from '../routes.ts';
import { Document, siteTitle } from './document.tsx';
import { SiteLayout } from './site-layout.tsx';

export function HomePage(handle: Handle<{ allPostsData: PostSummary[] }>) {
	return () => {
		let { allPostsData } = handle.props;

		return (
			<Document title={siteTitle}>
				<SiteLayout home section="home">
					<section className="prose prose-lg prose-neutral max-w-none prose-a:text-red-800">
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
						<p>Some of my current (technical) favorites include:</p>
						<ul>
							<li>Tanstack Start</li>
							<li>TypeScript</li>
							<li>Rust</li>
							<li>Tailwind</li>
							<li>Drizzle</li>
						</ul>
						<p>Some of my interests include:</p>
						<ul>
							<li>
								Music and{' '}
								<a href="https://stats.fm/user/will7?range=lifetime">
									obsessively tracking my listening habits.
								</a>
							</li>
							<li>
								Pickleball! I used to play a lot of Ultimate, but then I got old.
							</li>
							<li>
								Introducing my kids to Pokemon Fire Red and other childhood
								classics.
							</li>
							<li>Watching TV shows, and playing video games when I get a moment.</li>
						</ul>
						<p>
							Welcome to the fifth iteration of my{' '}
							<a href={routes.aboutWebsite.href()}>website</a>.
						</p>
						
						<p>
							You can find my <a href={routes.blog.href()}>blog here</a>.
						</p>
					</section>
				</SiteLayout>
			</Document>
		);
	};
}
