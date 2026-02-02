// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },

    // ✨ UI 配置：使用你的 nobg.png 图片
    ui: {
        brand: {
            name: 'no.signal',
            mark: () => (
                <img
                    src="/nobg.png"
                    alt="no.signal Logo"
                    height={24}
                    width={24}
                />
            ),
        },
        // 导航分组保持不变
        navigation: {
            'Writing': ['posts', 'diary'],
            'Pages': ['now'],
        },
    },

    collections: {
        // ... (保持之前的配置不变) ...
        posts: collection({
            label: '博客文章',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },

            schema: {
                title: fields.slug({ name: { label: '文章标题' } }),

                layout: fields.text({
                    label: 'Layout',
                    defaultValue: '../../layouts/post.astro',
                }),

                pubDate: fields.date({ label: '发布日期' }),

                description: fields.text({ label: 'SEO 描述', multiline: true }),
                excerpt: fields.text({ label: '文章摘要', multiline: true }),

                author: fields.text({ label: '作者', defaultValue: 'Gemini' }),

                isPinned: fields.checkbox({
                    label: '置顶文章 (Pin)',
                    defaultValue: false
                }),

                image: fields.object({
                    src: fields.image({
                        label: '封面图片',
                        directory: 'src/assets/images/posts',
                        publicPath: '@/assets/images/posts/',
                    }),
                    alt: fields.text({ label: '图片描述 (Alt)' }),
                }),

                tags: fields.array(
                    fields.text({ label: '标签' }),
                    {
                        label: '标签 (Tags)',
                        itemLabel: (props: any) => props.value
                    }
                ),

                content: fields.markdoc({
                    label: '正文内容',
                    options: {
                        image: {
                            directory: 'src/assets/images/posts',
                            publicPath: '@/assets/images/posts/',
                        }
                    }
                }),
            },
        }),

        diary: collection({
            label: 'Diary (碎碎念)',
            slugField: 'title',
            path: 'src/content/diary/*',
            format: { contentField: 'content' },
            entryLayout: 'content',

            schema: {
                title: fields.slug({ name: { label: '标题 (YYYY-MM-DD)' } }),
                pubDate: fields.date({ label: '日期', defaultValue: { kind: 'today' } }),

                description: fields.text({
                    label: '心情/摘要',
                    multiline: true
                }),

                content: fields.markdoc({
                    label: '正文内容',
                    options: {
                        image: {
                            directory: 'src/assets/images/diary',
                            publicPath: '../../assets/images/diary/',
                        }
                    }
                }),
            },
        }),
    },

    singletons: {
        now: singleton({
            label: 'Now 页面',
            path: 'src/content/pages/now',
            format: { contentField: 'content' },
            schema: {
                title: fields.text({
                    label: '页面标题',
                    defaultValue: 'Now'
                }),
                updatedDate: fields.date({
                    label: '最后更新日期',
                    defaultValue: { kind: 'today' }
                }),
                content: fields.markdoc({
                    label: '正文内容 (Markdown)',
                    options: {
                        image: {
                            directory: 'src/assets/images/pages',
                            publicPath: '../../assets/images/pages/',
                        }
                    }
                }),
            },
        }),
    },
});