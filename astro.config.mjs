import { defineConfig } from 'astro/config';
import rehypePrettyCode from 'rehype-pretty-code';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";
import { remarkAlert } from 'remark-github-blockquote-alert';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import { visualizer } from "rollup-plugin-visualizer";

const options = {
    // ... (保持不变) ...
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
    site: 'https://no-signal.pages.dev/',

    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [[rehypePrettyCode, options]]
    },

    integrations: [
        react(),
        sitemap(),
        pagefind({
            pagefindOptions: {
                language: 'zh',
            }
        }),
        markdoc(),
        keystatic()
    ],

    // ✅ [关键] 保持 static，不加 adapter
    // Cloudflare Pages 会自动托管生成的 dist 文件夹
    output: 'static',

    // ❌ [删除] 整个 adapter 配置块都要删掉
    // adapter: vercelStatic({ ... }),

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