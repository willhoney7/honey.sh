import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutWebsite = () => (
    <Layout>
        <SEO title="About the Website" />
        <h1>About this Website</h1>
        <p>This is the third iteration of my personal website.</p>
        <ul>
            <li>
                The first version (~2010) was built on Wordpress with a theme by{' '}
                <a href="https://www.elegantthemes.com/" target="_blank" rel="noreferrer noopener">
                    Elegant Themes
                </a>
                .
            </li>
            <li>
                The second iteration (2012) was written with{' '}
                <a href="https://jekyllrb.com/" target="_blank" rel="noreferrer noopener">
                    Jekyll
                </a>{' '}
                and hosted on Github Pages.
            </li>
            <li>
                This latest version (2018) was built with{' '}
                <a href="https://www.gatsbyjs.org/" rel="noreferrer noopener">
                    Gatsby
                </a>
                . It is hosted by <a href="https://netlify.com">Netlify</a>.
            </li>
        </ul>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default AboutWebsite;
