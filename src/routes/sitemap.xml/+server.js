export const prerender = true;

export async function GET({ url }) {
  const base = url.origin; // Dynamically get the base URL from the request

  const pages = [
    '', // Home page
    'about',
    'projects',
    'contact',
    'resume'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
      <url>
        <loc>${base}/${page}</loc>
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