/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [{ source: '/', destination: '/en', permanent: true }];
  // },
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~@styles/variables.scss";`,
  },
};

module.exports = nextConfig;
