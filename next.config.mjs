/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.radios.com.br',
            port: '',
          },
        ],
      },
};

export default nextConfig;
