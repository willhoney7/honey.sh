export default function SocialLinks() {
    return (
        <>
            <style jsx>{`
                footer {
                    margin-top: 3rem;
                    padding-top: 1rem;
                    border-top: 1px solid #e4e4e4;
                    display: flex;
                    column-gap: 12px;
                    opacity: 0.9;
                }

                img {
                    width: 36px;
                    height: 36px;
                }
            `}</style>
            <footer>
                <a href="https://twitter.com/tibfib" target="_blank" rel="noreferrer noopener">
                    <img alt="@Tibfib on Twitter" src="/images/social/iconmonstr-twitter.png" />
                </a>

                <a href="mailto:hi@honey.sh" target="_blank" rel="noreferrer noopener">
                    <img alt="Email hi@honey.sh" src="/images/social/iconmonstr-email.png" />
                </a>
                <a
                    href="https://www.linkedin.com/in/will-honey/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        alt="Will Honey on LinkedIn"
                        src="/images/social/iconmonstr-linkedin.png"
                    />
                </a>
                <a href="https://github.com/willhoney7" target="_blank" rel="noreferrer noopener">
                    <img alt="@willhoney7 on Github" src="/images/social/iconmonstr-github.png" />
                </a>
                <a
                    href="https://open.spotify.com/user/tibfib"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img alt="@Tibfib on Spotify" src="/images/social/iconmonstr-spotify.png" />
                </a>
                <a
                    href="https://instagram.com/willhoney7"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        alt="@willhoney7 on Instagram"
                        src="/images/social/iconmonstr-instagram.png"
                    />
                </a>
            </footer>
        </>
    );
}
