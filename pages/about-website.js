import Head from 'next/head';
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
                        The{' '}
                        <a href="https://v2.honey.sh" target="_blank" rel="noreferrer noopener">
                            second iteration
                        </a>{' '}
                        (2012) was written with{' '}
                        <a href="https://jekyllrb.com/" target="_blank" rel="noreferrer noopener">
                            Jekyll
                        </a>{' '}
                        and hosted on Github Pages. I had grand plans of blogging but never followed
                        through.
                    </li>
                    <li>
                        For the third version (2018), I made a basic site with{' '}
                        <a href="https://www.gatsbyjs.org/" rel="noreferrer noopener">
                            Gatsby
                        </a>
                        but found it too much work to get simple things done and never really did
                        anything with it.
                    </li>
                    <li>
                        This fourth version, shipped in 2020, is built with{' '}
                        <a href="https://nextjs.org/" rel="noreferrer noopener">
                            Next.js
                        </a>
                        . Is this the time I actually invest in this website? Who knows... not me!
                    </li>
                </ul>
            </section>
        </Layout>
    );
}
