import { routes } from '../routes.ts';
import { Document } from './document.tsx';
import { SiteLayout } from './site-layout.tsx';

export function WinstonPage() {
	return () => (
		<Document
			description="Photos of Winston"
			path={routes.winston.href()}
			socialImage={{
				alt: 'Winston',
				height: 3003,
				path: '/images/winston_square.jpg',
				width: 2990,
			}}
			title="Winston"
		>
			<SiteLayout>
				<section>
					<h1 className="my-4 text-[2rem] leading-[1.3] font-extrabold">Winston</h1>
					<div className="grid grid-cols-2 gap-4">
						<img
							alt="Winston"
							className="col-span-2 w-full rounded-lg"
							height="3003"
							src="/images/winston_square.jpg"
							width="2990"
						/>
						<img
							alt="Winston looking goofy"
							className="h-full w-full rounded-lg object-cover"
							height="339"
							src="/images/winston_goofy_small.jpg"
							width="300"
						/>
					</div>
				</section>
			</SiteLayout>
		</Document>
	);
}
