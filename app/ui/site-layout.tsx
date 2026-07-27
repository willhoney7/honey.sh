import type { Handle, RemixNode } from 'remix/ui';

export function SiteLayout(handle: Handle<{ children?: RemixNode; home?: boolean }>) {
	return () => {
		let { children, home = false } = handle.props;

		return (
			<div className="container">
				<header className="header">
					{home ? (
						<>
							<img
								src="/images/me_2024_alt.jpg"
								className="header-home-image border-circle"
								alt="Will Honey with wife in 2024"
							/>
							<h1 className="heading-2xl">Will Honey</h1>
						</>
					) : (
						<>
							<a href="/">
								<img
									src="/images/me_2024_alt.jpg"
									className="header-image border-circle"
									alt="Will Honey with wife in 2024"
								/>
							</a>
							<h2 className="heading-lg">
								<a href="/" className="color-inherit">
									Will Honey
								</a>
							</h2>
						</>
					)}
				</header>
				<main className="main">{children}</main>
				{home ? null : (
					<div className="back-to-home">
						<a href="/">← Back to home</a>
					</div>
				)}
				<SocialLinks />
				<BouncingWinston />
			</div>
		);
	};
}

function SocialLinks() {
	return () => (
		<footer className="social-links">
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
				<img alt="Will Honey on LinkedIn" src="/images/social/iconmonstr-linkedin.png" />
			</a>
			<a href="https://github.com/willhoney7" target="_blank" rel="noreferrer noopener">
				<img alt="@willhoney7 on Github" src="/images/social/iconmonstr-github.png" />
			</a>
		</footer>
	);
}

function BouncingWinston() {
	return () => (
		<div className="winston-container" aria-hidden="true">
			<div className="winston" />
		</div>
	);
}
