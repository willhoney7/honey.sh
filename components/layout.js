import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Will Honey';
export const siteTitle = 'Will Honey';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="The development blog of Will Honey" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/winston.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={'My Dog Winston'}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/winston.jpg"
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={'My Dog Winston'}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main className={styles.main}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}

            <footer className={styles.footer}>
                <a href="https://twitter.com/tibfib">Twitter @Tibfib</a>•
                <a href="https://github.com/tibfib">Github @Tibfib</a>•
                <a href="https://www.youtube.com/user/Tibfib1">YouTube @Tibfib1</a>
            </footer>
        </div>
    );
}
