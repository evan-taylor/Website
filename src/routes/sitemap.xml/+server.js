// src/routes/sitemap.xml/+server.js
export const prerender = true;

export async function GET({ request }) {
  const pages = [
    '', // Home page
    'about',
    'projects',
    'contact',
    'resume'
  ];

  // Extract the host from the request headers
  const host = request.headers.get('host');
  const protocol = host.startsWith('localhost') ? 'http' : 'https';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
    <url>
        <loc>${protocol}://${host}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
    `;
      })
      .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}