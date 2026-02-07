import { defineConfig } from 'astro/config';
import rehypePrettyCode from 'rehype-pretty-code';
import vercelStatic from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";
import { remarkAlert } from 'remark-github-blockquote-alert';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import { visualizer } from "rollup-plugin-visualizer";

const options = {
    // Specify the theme to use or a custom theme json, in our case
    // it will be a moonlight-II theme from
    // https://github.com/atomiks/moonlight-vscode-theme/blob/master/src/moonlight-ii.json
    // Callbacks to customize the output of the nodes
    //theme: json,
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [
                {
                    type: 'text',
                    value: ' '
                }
            ];
        }
    },
    onVisitHighlightedLine(node) {
        // Adding a class to the highlighted line
        node.properties.className = ['highlighted'];
    }
};

// https://astro.build/config
export default defineConfig({
    site: 'https://astro-tech-blog-ten.vercel.app/',

    markdown: {
        syntaxHighlight: false,
        // Disable syntax built-in syntax hightlighting from astro
        rehypePlugins: [[rehypePrettyCode, options]]
    },

    integrations: [react(), sitemap(), pagefind({
        pagefindOptions: {
            language: 'zh', // 👈 这一行是灵魂！强制建立中文索引
        }
    }), markdoc(), keystatic()],
    output: 'static',

    adapter: vercelStatic({
        webAnalytics: {
            enabled: true
        }
    }),

    vite: {
        plugins: [
            tailwindcss(),
            visualizer({
                emitFile: true,
                filename: "stats.html", // 生成的文件名
                template: "treemap"
            })
        ],
        optimizeDeps: {
            exclude: ['keystatic.config.tsx']
        },
        build: {
            // 1. 调高警告阈值到 1MB (1024 KB)，消除 "Some chunks are larger than 500 kB" 警告
            chunkSizeWarningLimit: 4096,

            // 2. 优化分包策略，将第三方库单独打包，提高缓存命中率
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        // 将 node_modules 中的依赖单独打包成 'vendor'
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                    },
                },
            },
        }
    }
});