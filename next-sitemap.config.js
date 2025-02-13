/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.desight.co',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://www.desight.co',
      hreflang: 'en',
    },
    {
      href: 'https://www.desight.co/ru',
      hreflang: 'ru',
    },
    {
      href: 'https://www.desight.co/he',
      hreflang: 'he',
    },
  ],
  // Change this to include/exclude specific pages
  exclude: ['/404', '/500'],
} 