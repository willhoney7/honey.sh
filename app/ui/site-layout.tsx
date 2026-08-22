import type { Handle, RemixNode } from 'remix/ui';

export function SiteLayout(handle: Handle<{ children?: RemixNode; home?: boolean }>) {
	return () => {
		let { children, home = false } = handle.props;

		return (
			<div className="mx-auto mt-12 mb-24 max-w-[38rem] px-4 text-[17px] leading-6 text-neutral-800 [&_a]:text-red-800 [&_a]:no-underline [&_a:hover]:underline">
				<header className="flex flex-col items-center">
					{home ? (
						<>
							<img
								src="/images/me_2024_alt.jpg"
								className="size-32 rounded-full object-cover"
								alt="Will Honey with wife in 2024"
							/>
							<h1 className="my-4 text-[2.6rem] leading-[1.2] font-extrabold">
								Will Honey
							</h1>
						</>
					) : (
						<>
							<a href="/">
								<img
									src="/images/me_2024_alt.jpg"
									className="size-24 rounded-full object-cover"
									alt="Will Honey with wife in 2024"
								/>
							</a>
							<h2 className="my-4 text-2xl leading-snug font-bold">
								<a href="/" className="text-inherit!">
									Will Honey
								</a>
							</h2>
						</>
					)}
				</header>
				<main className="min-h-[500px]">{children}</main>
				{home ? null : (
					<div className="mt-12">
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
		<footer className="mt-12 flex gap-x-3 border-t border-neutral-200 pt-4 opacity-90 [&_img]:size-9">
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
		<div className="fixed right-[20%] -bottom-28" aria-hidden="true">
			<div className="size-24 animate-[bob_1500ms_ease_0s_6_alternate] rounded-sm bg-[#d79b5f] [background-image:url('/images/winston_small.jpg')] bg-cover hover:[animation-play-state:paused] hover:[background-image:url('/images/winston_goofy_small.jpg')] motion-reduce:hidden" />
		</div>
	);
}
