/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  webpack(config, {isServer}) {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        '@sentry': {
          test: /[\\/]node_modules[\\/](@sentry)[\\/]/,
          name: '@sentry',
          priority: 10,
          reuseExistingChunk: false,
        },
      };
    }

    return config;
  },
}


module.exports = nextConfig
