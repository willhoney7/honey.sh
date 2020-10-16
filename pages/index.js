import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hi! 👋 I'm a Frontend Developer who likes to focus on excellent user experiences
                    and pragmatism.
                </p>

                <p>
                    I've been at this for 10+ years now. I got my start making apps for the webOS
                    platform. You can read more about my programming journey in{' '}
                    <Link href="/posts/my-programming-journey">this blog post</Link>.
                </p>

                <p>
                    I work at <a href="https://operationalresults.com">Operational Results</a> as
                    their Director of Product and live in Lehi, Utah with my wife, two little girls,
                    and dog named Winston.
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
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
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
