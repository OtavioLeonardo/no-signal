// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. 博客文章集合 (保持原样)
const posts = defineCollection({
    type: 'content', // 建议显式加上 type: 'content'
    schema: ({ image }: { image: any }) => z.object({
        title: z.string(),
        layout: z.string().optional(),
        pubDate: z.coerce.date(),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        author: z.string().default('Gemini'),
        isPinned: z.boolean().default(false),
        image: z.object({
            src: image().optional().or(z.string().optional().nullable()),
            alt: z.string().optional().nullable(),
        }).optional(),
        tags: z.array(z.string()).default([]),
    }),
});

// ✅ 2. 新增：日记集合 (Diary)
const diary = defineCollection({
    type: 'content', // 必须指定类型
    schema: z.object({
        // 日记的结构通常比较简单
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string().optional(),
        // 如果日记也需要封面图，可以把上面的 image 逻辑复制下来，
        // 但通常日记只需要简单的文本，这里暂时保持精简。
    }),
});

// ✅ 3. 导出所有集合
export const collections = {
    posts,
    diary // 把 diary 加在这里
};