import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const InterestsList = ({ interests }) =>
    interests.map(([name, url], index) => (
        <React.Fragment key={name}>
            {url ? (
                <a href={url} target="_blank" rel="noreferrer noopener">
                    {name}
                </a>
            ) : (
                name
            )}
            {index + 1 < interests.length ? ', ' : ''}
        </React.Fragment>
    ));

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <h1>
            Hello{' '}
            <span role="img" aria-label="wave">
                👋
            </span>
        </h1>
        <p>
            Welcome to the third iteration of my <Link to="/about-website">website</Link>. I work at{' '}
            <a href="https://www.xactware.com/" target="_blank" rel="noreferrer noopener">
                Xactware
            </a>{' '}
            as a Senior Frontend Developer. I live in Riverton, UT with my wife, daughter, and
            goldendoodle, Winston.
        </p>

        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
        </div>

        <p>
            Websites I've built (that are still around!):{' '}
            <InterestsList
                interests={[
                    ['alanhoney.photography', 'https://alanhoney.photography'],
                    ['oremultimate.com', 'https://oremultimate.com'],
                ]}
            />
        </p>

        <p>
            Find me here:{' '}
            <InterestsList
                interests={[
                    ['@Tibfib on Twitter', 'https://twitter.com/tibfib'],
                    ['Instagram', 'https://www.instagram.com/tibfib'],
                    ['Github', 'https://github.com/Tibfib'],
                    ['Spotify', 'https://open.spotify.com/user/tibfib?si=DSpGztrhS0q0hGxak5aiLw'],
                ]}
            />
        </p>

        <p>
            Tech I'm interested in:{' '}
            <InterestsList
                interests={[
                    ['React', 'https://reactjs.org'],
                    ['Gatsby', 'https://www.gatsbyjs.org'],
                    ['Emotion', 'https://emotion.sh'],
                    ['TypeScript', 'https://www.typescriptlang.org'],
                    ['GraphQL', 'https://graphql.org'],
                    ['webpack', 'https://webpack.js.org'],
                ]}
            />
        </p>

        <p>
            Software I love:{' '}
            <InterestsList
                interests={[
                    ['YNAB', 'https://www.youneedabudget.com'],
                    ['1Password', 'https://1password.com'],
                    ['Notion', 'https://notion.so'],
                ]}
            />
        </p>

        <p>
            Other interests:{' '}
            <InterestsList
                interests={[
                    ['Ultimate Frisbee', 'https://oremultimate.com'],
                    ['NBA'],
                    ['Nintendo Switch', 'https://nin.codes/tibfib'],
                    ['Music', 'https://open.spotify.com/user/tibfib?si=DSpGztrhS0q0hGxak5aiLw'],
                ]}
            />
        </p>
    </Layout>
);

export default IndexPage;
