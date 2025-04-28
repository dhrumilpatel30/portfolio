import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    favicon: './public/favicon/icons8-developer-forma-thin-32.png',
    title: 'Dhrumil Patel',
    meta: {
      description: 'Portfolio of Dhrumil patel.',
      viewport: 'width=device-width, initial-scale=1.0',
      keywords: 'Dhrumil Patel, software developer, portfolio, web development, React, Spring Boot, projects, contact',
      author: 'Dhrumil Patel',
    },
  },
  output: {
    minify: true,
    polyfill: 'usage',
    cssModules: {
      auto: true,
    },
    assetPrefix: 'https://dhrumilpatel.dev',
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },
});
