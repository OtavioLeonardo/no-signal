import typography from '@tailwindcss/typography';

const disabledCss = {
	'code::before': false,
	'code::after': false,
	'blockquote p:first-of-type::before': false,
	'blockquote p:last-of-type::after': false,
	pre: false,
	code: false,
	'pre code': false
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// Apple Aesthetic: 优先使用 Inter 或系统原生字体 (SF Pro)
				sans: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				],
				// 你的原有 Mono 配置，保持不变
				mono: [
					'"JetBrains Mono"',
					'"Noto Sans SC"',
					'ui-monospace',
					'Menlo',
					'Monaco',
					'Microsoft YaHei',
					'monospace'
				],
			},
			// 调整排版插件，让文章阅读体验更像 Apple News / Safari 阅读模式
			typography: (theme) => ({
				DEFAULT: {
					css: {
						...disabledCss,
						'max-width': '65ch', // 最佳阅读宽度
						color: theme('colors.gray.800'),
						lineHeight: '1.75', // 更宽松的行高
						h1: {
							letterSpacing: '-0.025em',
							fontWeight: '700',
							color: theme('colors.gray.900'),
						},
						h2: {
							letterSpacing: '-0.015em',
							fontWeight: '600',
							marginTop: '2em',
							color: theme('colors.gray.900'),
						},
						'h3, h4': {
							letterSpacing: '-0.015em',
							fontWeight: '600',
							color: theme('colors.gray.900'),
						},
						blockquote: {
							borderLeftColor: theme('colors.gray.200'),
							fontStyle: 'normal', // 苹果风格引用通常不强制斜体
							color: theme('colors.gray.500'),
						}
					},
				},
				// 深色模式下的微调
				invert: {
					css: {
						color: theme('colors.gray.300'),
						'h1, h2, h3, h4': {
							color: theme('colors.gray.100'),
						}
					}
				}
			})
		}
	},
	plugins: [typography]
};