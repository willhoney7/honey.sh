import Head from 'next/head';
import Link from 'next/link';

import Date from '@/components/Date';
import Layout, { siteTitle } from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import utilStyles from '@/styles/utils.module.css';

export default function Home({
	allPostsData,
}: Awaited<ReturnType<typeof getStaticProps>>['props']) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi! 👋 <br />
					<br />I sit at the intersection of engineering, product, and design. I like to
					focus on excellent user experiences and pragmatism.
				</p>

				<p>Some of my recent technical interests include:</p>
				<ul>
					<li>React and Remix</li>
					<li>TypeScript</li>
					<li>Vite and Vitest</li>
					<li>Tailwind</li>
					<li>Prettier</li>
				</ul>

				<p>
					I've been at this for 12+ years now. I got my start making apps for the webOS
					platform. You can read more about my programming journey in{' '}
					<Link href="/posts/my-programming-journey">this blog post</Link>.
				</p>

				<p>
					I work at{' '}
					<a href="https://ori.io" target="_blank">
						Operational Results
					</a>{' '}
					as their Director of Product Development and live in Kansas City with my wife,
					three little girls, and dog named Winston.
				</p>
				<p>
					Welcome to the fourth iteration of my <Link href="/about-website">website</Link>
					.
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
