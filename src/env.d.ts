/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module '@pagefind/default-ui';

interface ImportMetaEnv {
	readonly PUBLIC_DIARY_PASSCODE_SHA256?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
