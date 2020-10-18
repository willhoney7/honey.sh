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
                <a href="https://github.com/tibfib" target="_blank" rel="noreferrer noopener">
                    <img alt="@Tibfib on Github" src="/images/social/iconmonstr-github.png" />
                </a>
                <a
                    href="https://www.youtube.com/user/Tibfib1"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img alt="@Tibfib1 on YouTube" src="/images/social/iconmonstr-youtube.png" />
                </a>
                <a
                    href="https://open.spotify.com/user/tibfib?si=fSM6ItQNQ8iKK9lzv1xt_w"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img alt="@Tibfib on Spotify" src="/images/social/iconmonstr-spotify.png" />
                </a>
                <a href="https://instagram.com/tibfib" target="_blank" rel="noreferrer noopener">
                    <img alt="@Tibfib on Instagram" src="/images/social/iconmonstr-instagram.png" />
                </a>
            </footer>
        </>
    );
}
