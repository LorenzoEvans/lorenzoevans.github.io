import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
    integrations: [astroImageTools],
    site: 'https://lorenzoevans.github.io/',
    base: process.env.NODE_ENV == 'production' ? '/lorenzoevans.github.io' : '/',
});
