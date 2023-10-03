/** @type {import("next").NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes under the root URL
        source: '/:path*', // This allows all paths under the root URL to match
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://pfeecommerce.azurewebsites.net',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
