import { q as createContentComponent, t as createGetHeadings, u as assetsConfig, v as $$Renderer } from './vendor_DFlZCbGh.mjs';
import { m as markdocConfig } from './markdoc.config_DIzp0XIU.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const experimentalHeadingIdCompat = false;

const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"content\":\"鬼压床我有超绝冷静哈哈哈哈！\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":true,\"attributes\":{\"content\":\"今天 fuji 的比赛表现超棒，感受到了超绝缠斗的魅力，而且第四名完赛，虽然差一点登上领奖台，但是我觉得特别满足！\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig, options, experimentalHeadingIdCompat);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
	experimentalHeadingIdCompat,
);

export { Content, getHeadings };
