import { defineConfig } from 'astro/config';
import rehypePrettyCode from 'rehype-pretty-code';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";
import { remarkAlert } from 'remark-github-blockquote-alert';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import { visualizer } from "rollup-plugin-visualizer";

const options = {
    onVisitLine(node) {
        if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className = ['highlighted'];
    }
};

export default defineConfig({
    site: 'https://www.nosignal.space', 

    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [[rehypePrettyCode, options]]
    },

    integrations: [react(), sitemap(), pagefind({
        pagefindOptions: {
            language: 'zh',
        }
    }), markdoc(), keystatic()],

    output: 'static',

    adapter: vercel({
        webAnalytics: {
            enabled: true
        },
        imagesConfig: {
            domains: [],
            sizes: []
        }
    }),

    vite: {
        plugins: [
            tailwindcss(),
            visualizer({
                emitFile: true,
                filename: "stats.html",
                template: "treemap"
            })
        ],
        optimizeDeps: {
            exclude: ['keystatic.config.tsx']
        },
        build: {
            chunkSizeWarningLimit: 4096,
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                    },
                },
            },
        }
    }
});