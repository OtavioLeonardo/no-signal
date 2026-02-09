// keystatic.config.tsx
import { config, fields, collection, singleton } from '@keystatic/core';

// 图标
const icon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" height="20" width="20">
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <rect width="18" height="18" x="3" y="3" rx="4" />
    </svg>
);

// 组件块定义
const asideComponentBlock = {
    kind: 'block' as const,
    label: '提示块 (Aside)',
    icon: icon,
    schema: {
        type: fields.select({
            label: '类型',
            description: '选择提示块颜色',
            options: [
                { label: '提示 (Tip)', value: 'tip' },
                { label: '笔记 (Note)', value: 'note' },
                { label: '警告 (Danger)', value: 'danger' },
                { label: '注意 (Caution)', value: 'caution' },
            ],
            defaultValue: 'tip',
        }),
        title: fields.text({ label: '标题 (可选)' }),
        content: fields.text({
            label: '提示内容',
            multiline: true,
            description: '直接在这里输入内容，支持换行',
        }),
    },
    // 预览视图
    preview: (props: any) => {
        const type = props.fields.type.value;
        const title = props.fields.title.value;
        const contentText = props.fields.content.value;

        // 1. 👇 先把默认样式提取出来，让 TS 放心
        const defaultStyle = { bg: '#eff6ff', border: '#3b82f6', text: '#1e3a8a' };

        // 2. 定义颜色映射表
        const colors: Record<string, typeof defaultStyle> = {
            tip: defaultStyle,
            note: { bg: '#f9fafb', border: '#9ca3af', text: '#374151' },
            danger: { bg: '#fef2f2', border: '#ef4444', text: '#991b1b' },
            caution: { bg: '#fff7ed', border: '#f97316', text: '#9a3412' }
        };

        // 3. 👇 使用 extracted defaultStyle 作为兜底，TS 就能确认 style 绝对不为空
        const style = colors[type] || defaultStyle;

        return (
            <div style={{
                padding: '16px',
                backgroundColor: style.bg,
                borderLeft: `4px solid ${style.border}`,
                borderRadius: '4px',
                margin: '1rem 0',
                fontFamily: 'system-ui, sans-serif'
            }}>
                <div style={{
                    fontWeight: 'bold',
                    color: style.text,
                    marginBottom: '8px',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    paddingBottom: '4px'
                }}>
                    {title || type.toUpperCase()}
                </div>

                <div style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.6',
                    fontSize: '14px',
                    color: '#333'
                }}>
                    {contentText ? contentText : <span style={{ color: '#999', fontStyle: 'italic' }}>(无内容)</span>}
                </div>
            </div>
        );
    },
};

export default config({
    storage: { kind: 'local' },
    ui: {
        brand: {
            name: 'no.signal',
            mark: () => <img src="/nobg.png" alt="Logo" height={24} width={24} />,
        },
        navigation: { 'Writing': ['posts', 'diary'], 'Pages': ['now'] },
    },
    collections: {
        posts: collection({
            label: '博客文章',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: '文章标题' } }),
                series: fields.text({
                    label: '所属系列 (Series)',
                    description: '例如：Effective Java 笔记。同名文章会自动生成导航卡片。',
                }),
                layout: fields.text({ label: 'Layout', defaultValue: '../../layouts/post.astro' }),
                pubDate: fields.date({ label: '发布日期' }),
                description: fields.text({ label: 'SEO 描述', multiline: true }),
                excerpt: fields.text({ label: '文章摘要', multiline: true }),
                author: fields.text({ label: '作者', defaultValue: 'Gemini' }),
                isPinned: fields.checkbox({ label: '置顶文章 (Pin)', defaultValue: false }),
                image: fields.object({
                    src: fields.image({ label: '封面图片', directory: 'src/assets/images/posts', publicPath: '@/assets/images/posts/' }),
                    alt: fields.text({ label: '图片描述 (Alt)' }),
                }),
                tags: fields.array(fields.text({ label: '标签' }), { label: '标签 (Tags)', itemLabel: (props: any) => props.value }),
                updates: fields.array(
                    fields.object({
                        date: fields.date({ label: '更新日期', defaultValue: { kind: 'today' } }),
                        title: fields.text({ label: '更新摘要/标题' }),
                        content: fields.text({
                            label: '详细内容',
                            multiline: true,
                            description: '关于这次观点变化的详细描述'
                        }),
                    }),
                    {
                        label: '文章更新日志 (Timeline)',
                        description: '记录这篇博客随时间的观点变化',
                        itemLabel: (props) => `${props.fields.date.value} - ${props.fields.title.value}`,
                    }
                ),
                content: fields.markdoc({
                    label: '正文内容',
                    options: { image: { directory: 'src/assets/images/posts', publicPath: '@/assets/images/posts/' } },
                    components: { aside: asideComponentBlock },
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
                description: fields.text({ label: '心情/摘要', multiline: true }),
                content: fields.markdoc({
                    label: '正文内容',
                    options: { image: { directory: 'src/assets/images/diary', publicPath: '../../assets/images/diary/' } },
                    components: { aside: asideComponentBlock },
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
                title: fields.text({ label: '页面标题', defaultValue: 'Now' }),
                updatedDate: fields.date({ label: '最后更新日期', defaultValue: { kind: 'today' } }),
                content: fields.markdoc({
                    label: '正文内容 (Markdown)',
                    options: { image: { directory: 'src/assets/images/pages', publicPath: '../../assets/images/pages/' } },
                    components: { aside: asideComponentBlock },
                }),
            },
        }),
    },
});