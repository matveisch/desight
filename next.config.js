/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the redirects configuration
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~@styles/variables.scss";`,
  },
};

module.exports = nextConfig;
