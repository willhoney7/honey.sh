import { defineConfig } from 'vite';

import netlify from '@netlify/vite-plugin';
import { remix } from '@pitlane/dev';

export default defineConfig(({ mode }) => ({
	plugins: [remix(), mode === 'netlify' && netlify()],
}));
