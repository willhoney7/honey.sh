import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'vite';

const origin = 'https://honey.sh';

test('all reachable internal links resolve', async (t) => {
	let vite = await createServer({
		appType: 'custom',
		server: { middlewareMode: true, ws: false },
	});
	t.after(() => vite.close());

	let { default: router } = await vite.ssrLoadModule('/app/entry.server.ts');
	let pending = [{ path: '/', source: 'the starting page' }];
	let visited = new Set<string>();

	while (pending.length > 0) {
		let { path, source } = pending.shift()!;
		if (visited.has(path)) continue;
		visited.add(path);

		let response = await router.fetch(new URL(path, origin), {
			headers: { accept: 'text/html' },
		});

		assert.ok(response.ok, `Internal link ${path} from ${source} returned ${response.status}`);

		if (!response.headers.get('content-type')?.includes('text/html')) continue;

		let html = await response.text();
		for (let href of getAnchorHrefs(html)) {
			let url = new URL(href, origin);
			if (url.origin !== origin) continue;

			url.hash = '';
			pending.push({ path: `${url.pathname}${url.search}`, source: path });
		}
	}
});

function getAnchorHrefs(html: string) {
	return [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)].map((match) => match[1]);
}
