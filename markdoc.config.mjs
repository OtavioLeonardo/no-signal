import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
    tags: {
        aside: {
            render: component('./src/components/Aside.astro'),
            attributes: {
                type: { type: String, default: 'tip' },
                title: { type: String },
                // 👇 新增：接收 content 作为属性
                content: { type: String },
            },
        },
    },
});