// next.config.js
module.exports = {
  experimental: {
    middleware: true, // Enable edge middleware
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://elevatecommerce.netlify.app',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  redirects: async () => {
    return [
      {
        source: '/cart',
        destination: '/auth/login', // Redirect to login page if not authenticated
        permanent: false,
      },
    ];
  },
    images: {
      domains: ['flower.elevateegy.com'],  // Ensure this is added
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flower.elevateegy.com',
          pathname: '/uploads/**',  // Matches images within the /uploads/ directory
        },
      ],
    },
  };
  