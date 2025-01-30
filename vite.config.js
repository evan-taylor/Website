import { sveltekit } from "@sveltejs/kit/vite";
import preprocess from "svelte-preprocess";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import 'src/styles/global.css';`
            }
        }
    }
};

export default config;