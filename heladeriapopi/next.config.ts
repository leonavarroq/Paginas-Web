/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  /*
  webpack(config:any) {
    // Regla 1: Modificar la regla existente para que ignore los SVGs
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },*/
};

export default nextConfig;