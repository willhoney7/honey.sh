import { defineConfig } from 'vite';

import netlify from '@netlify/vite-plugin';
import { remix } from '@pitlane/dev';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
	plugins: [tailwindcss(), remix(), mode === 'netlify' && netlify()],
}));
