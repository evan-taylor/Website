import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        files: {
            assets: 'public' // Ensure static assets go into `public/`
        }
    },
    preprocess: preprocess()
};

export default config;