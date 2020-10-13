import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function AboutWebsite() {
    return (
        <Layout>
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

                <p></p>
            </section>
        </Layout>
    );
}
