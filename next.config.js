// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3-alpha-sig.figma.com', 'media.licdn.com', 'atifkhan.tech'], // Agrega ambos dominios aquí
  },
};

module.exports = nextConfig;
