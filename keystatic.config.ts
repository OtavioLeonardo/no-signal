// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local', // 本地模式
    },

    collections: {
        // ============================================================
        // 1. 博客文章 (Posts) - 保持你原来的配置不变
        // ============================================================
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

        // ============================================================
        // 2. ✅ 新增：碎碎念 (Diary)
        // ============================================================
        diary: collection({
            label: '碎碎念 (Diary)',
            slugField: 'title',
            // ⚠️ 指向 content/diary 文件夹
            path: 'src/content/diary/*',
            format: { contentField: 'content' },

            schema: {
                // 1. 标题 (Slug)
                title: fields.slug({ name: { label: '标题' } }),

                // 2. 日期
                pubDate: fields.date({ label: '日期' }),

                // 3. 心情/摘要 (可选)
                description: fields.text({
                    label: '心情/摘要',
                    multiline: true
                }),

                // 4. 正文
                content: fields.markdoc({
                    label: '正文内容',
                    options: {
                        image: {
                            // ✅ 建议把日记图片单独放一个文件夹，保持整洁
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