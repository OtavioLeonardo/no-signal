import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  // 隐藏部分字符，防止泄露，只看有没有值
  const showSecret = (val?: string) => val ? `${val.slice(0, 5)}... (长度: ${val.length})` : '❌ 未读取到 (Undefined)';

  const envCheck = {
    // 检查 Node.js 标准环境变量 (Keystatic 依赖这个)
    PROCESS_ID: showSecret(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
    PROCESS_SECRET: showSecret(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET),
    PROCESS_KEY: showSecret(process.env.KEYSTATIC_SECRET),
    
    // 检查 Astro 专用环境变量
    META_ID: showSecret(import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID),
    
    // 检查 Vercel 区域
    VERCEL_REGION: process.env.VERCEL_REGION || 'Unknown',
    NODE_ENV: process.env.NODE_ENV,
  };

  return new Response(JSON.stringify(envCheck, null, 2), {
    headers: { 'Content-Type': 'application/json' }
  });
}