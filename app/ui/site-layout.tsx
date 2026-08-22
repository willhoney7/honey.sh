import type { Handle, RemixNode } from 'remix/ui';

import { routes } from '../routes.ts';

type SiteSection = 'blog' | 'home';

export function SiteLayout(
	handle: Handle<{ children?: RemixNode; home?: boolean; section?: SiteSection }>
) {
	return () => {
		let { children, home = false, section } = handle.props;

		return (
			<>
				<PrimaryNavigation section={section} />
				<div className="mx-auto mt-10 mb-24 max-w-[38rem] px-4 text-[17px] leading-6 text-neutral-800 dark:text-sky-50 [&_a]:text-red-800 dark:[&_a]:text-sky-300 [&_a]:no-underline [&_a:hover]:underline">
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
					<SocialLinks />
				</div>
			</>
		);
	};
}

function PrimaryNavigation(handle: Handle<{ section?: SiteSection }>) {
	return () => {
		let { section } = handle.props;

		return (
			<nav
				aria-label="Primary navigation"
				className="sticky top-0 z-50 bg-sky-950 text-sm shadow-sm dark:bg-sky-900"
			>
				<div className="mx-auto flex max-w-[38rem] gap-7 px-4 py-4">
					<NavigationLink
						active={section === 'home'}
						href={routes.home.href()}
						label="Home"
					/>
					<NavigationLink
						active={section === 'blog'}
						href={routes.blog.href()}
						label="Blog"
					/>
				</div>
			</nav>
		);
	};
}

function NavigationLink(handle: Handle<{ active: boolean; href: string; label: string }>) {
	return () => {
		let { active, href, label } = handle.props;

		return (
			<a
				aria-current={active ? 'page' : undefined}
				className={`font-medium text-normal ${
					active
						? 'text-sky-100 underline decoration-2 underline-offset-4'
						: 'text-sky-100/70 hover:text-sky-100'
				}`}
				href={href}
			>
				{label}
			</a>
		);
	};
}

function SocialLinks() {
	return () => (
		<footer className="mt-12 flex gap-x-3 border-t border-neutral-200 pt-4 opacity-90 dark:border-sky-800 [&_img]:size-9 dark:[&_img]:invert">
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
