import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: 'Harbor · 港湾',
    description: 'Leo 的个人站点：项目与文章',
    site: context.site?.href ?? 'https://leo-yuxiangchao.github.io/harbor',
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
    })),
  });
}
