import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as renderTemplate } from './vendor_DFlZCbGh.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://astro-tech-blog-ten.vercel.app/");
const $$Aside = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Aside;
  const { type = "tip", title, content } = Astro2.props;
  const styles = {
    note: {
      container: "bg-gray-50 border-gray-500 text-gray-800 dark:bg-gray-800/50 dark:border-gray-400 dark:text-gray-200",
      titleColor: "text-gray-900 dark:text-gray-100",
      icon: "\u{1F4DD}",
      defaultTitle: "Note"
    },
    tip: {
      container: "bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-900/20 dark:border-blue-400 dark:text-blue-100",
      titleColor: "text-blue-900 dark:text-blue-50",
      icon: "\u{1F4A1}",
      defaultTitle: "Tip"
    },
    caution: {
      container: "bg-orange-50 border-orange-500 text-orange-800 dark:bg-orange-900/20 dark:border-orange-400 dark:text-orange-100",
      titleColor: "text-orange-900 dark:text-orange-50",
      icon: "\u26A1",
      defaultTitle: "Caution"
    },
    danger: {
      container: "bg-red-50 border-red-500 text-red-800 dark:bg-red-900/20 dark:border-red-400 dark:text-red-100",
      titleColor: "text-red-900 dark:text-red-50",
      icon: "\u{1F525}",
      defaultTitle: "Danger"
    }
  };
  const current = styles[type] || styles.note;
  const displayTitle = title || current.defaultTitle;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col border-l-4 py-3 px-4 my-4 rounded-r-lg shadow-sm ${current.container} prose-p:my-0`, "class")}> <div${addAttribute(`flex items-center font-bold text-sm mb-1 ${current.titleColor}`, "class")}> <span class="mr-2 text-lg">${current.icon}</span> ${displayTitle} </div> <div class="text-sm leading-relaxed opacity-90 whitespace-pre-wrap">  ${content} ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/otavio/Desktop/\u6742\u7269/nosignal/src/components/Aside.astro", void 0);

export { $$Aside as $ };
