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
				// 我们重新定义 'mono' (等宽字体) 的逻辑：
				mono: [
					'"JetBrains Mono"',  // 1. 英文优先用 JetBrains Mono
					'"Noto Sans SC"',    // 2. 中文优先用 思源黑体
					'ui-monospace',      // 3. 后面是系统保底...
					'Menlo',
					'Monaco',
					'Microsoft YaHei',   // Windows 保底
					'monospace'
				],
			},
			typography: {
				DEFAULT: { css: disabledCss },
				sm: { css: disabledCss },
				lg: { css: disabledCss },
				xl: { css: disabledCss },
				'2xl': { css: disabledCss }
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
