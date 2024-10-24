import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  skipMiddlewareUrlNormalize: true,
  pageExtensions: ["ts", "tsx"],
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: [{ loader: "@svgr/webpack", options: { icon: true } }],
          as: "*.js",
        },
      },
    },
  },
  webpack(config: any) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
