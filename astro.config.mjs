import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
    integrations: [astroImageTools, mdx()],
    site: 'https://lorenzoevans.github.io/',
    base: process.env.NODE_ENV == 'production' ? '/lorenzoevans.github.io' : '/',
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});
