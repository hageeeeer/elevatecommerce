// next.config.js
module.exports = {
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
  