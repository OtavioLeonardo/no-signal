import { q as createContentComponent, t as createGetHeadings, u as assetsConfig, v as $$Renderer } from './vendor_DFlZCbGh.mjs';
import { m as markdocConfig } from './markdoc.config_DIzp0XIU.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const experimentalHeadingIdCompat = false;

const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":true,\"attributes\":{\"content\":\"我之前一直都没办法把博客用起来，最近开始玩塞车了，突然有好多内容想要写下来，于是就把这个想法重新拾起来了。不过也是说来惭愧输出的内容实在是太少，还要继续努力。\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":true,\"attributes\":{\"content\":\"今天还有一个进步的点在于，学会了怎么使用 Versel 以及配置国内的域名，我的博客终于有了一个不是那么歪七扭八，长不拉几，根本记不住的域名了。\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":true,\"attributes\":{\"content\":\"最近一直在想副业的事情，先从坚持做好这个博客开始吧！这么多年也有了这么多经历了，也可以输出输出了。毕竟在 ai 的时代，尤其是对我这种 ADHDer 来说，写作的能力已经快要被抹去了，慢慢尝试一下吧！\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
