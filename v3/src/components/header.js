import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "me.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <Img
                css={{ height: 60, width: 60, marginRight: '1rem', borderRadius: '50%' }}
                fluid={data.placeholderImage.childImageSharp.fluid}
            />
        )}
    />
);

const Header = ({ siteTitle }) => (
    <div
        css={{
            background: '#335e99',
            marginBottom: '1.45rem',
            boxShadow: 'black 0px 0px 10px 0px;',
        }}
    >
        <div
            css={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1rem',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Image />
            <h1 css={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </div>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
