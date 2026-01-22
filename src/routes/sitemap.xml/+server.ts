import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const pages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: '/services', priority: '0.9', changefreq: 'monthly' },
		{ url: '/reviews', priority: '0.9', changefreq: 'weekly' },
		{ url: '/referral', priority: '0.7', changefreq: 'monthly' },
		{ url: '/contact', priority: '0.8', changefreq: 'monthly' },
		{ url: '/booking', priority: '0.9', changefreq: 'monthly' }
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>https://studio210.co.uk${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`
	)
	.join('\n')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
