import { routes } from '../routes.ts';
import { Document, siteTitle } from './document.tsx';
import { SiteLayout } from './site-layout.tsx';

export function AboutWebsitePage() {
	return () => (
		<Document path={routes.aboutWebsite.href()} title={siteTitle}>
			<SiteLayout>
				<section className="prose prose-lg prose-neutral max-w-none prose-a:text-red-800 dark:prose-invert dark:prose-a:text-sky-300">
					<p>
						This is the <strong>fourth</strong> iteration of my personal website.
					</p>
					<ul>
						<li>
							The first version (~2010) was built on Wordpress with a theme by{' '}
							<a
								href="https://www.elegantthemes.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								Elegant Themes
							</a>
							.
						</li>
						<li>
							The second iteration (2012) was written with{' '}
							<a
								href="https://jekyllrb.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								Jekyll
							</a>{' '}
							and hosted on Github Pages. I had grand plans of blogging but never
							followed through.
						</li>
						<li>
							For the third version (2018), I made a basic site with{' '}
							<a href="https://www.gatsbyjs.org/" rel="noreferrer noopener">
								Gatsby
							</a>{' '}
							but found it too much work to get simple things done and never really
							did anything with it.
						</li>
						<li>
							The fourth version, shipped in 2020, was built with{' '}
							<a href="https://nextjs.org/" rel="noreferrer noopener">
								Next.js
							</a>{' '}
							with a lightly modified starter template 😱.
						</li>
						<li>
							This fifth version, shipped in 2026, was built with{' '}
							<a href="https://remix.run/" rel="noreferrer noopener">
								Remix (3)
							</a>{' '}
							.
						</li>
					</ul>
				</section>
			</SiteLayout>
		</Document>
	);
}
