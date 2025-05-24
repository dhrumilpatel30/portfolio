import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  html: {
    template: './src/index.html',
    favicon: './public/favicon/icons8-developer-forma-thin-32.png',
    title: 'Dhrumil Patel',
    meta: {
      description: 'Portfolio of Dhrumil patel.',
      viewport: 'width=device-width, initial-scale=1.0',
      keywords:
        'Dhrumil Patel, software developer, portfolio, web development, React, Spring Boot, projects, contact',
      author: 'Dhrumil Patel',
    },
  },
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
  output: {
    minify: true,
    polyfill: 'usage',
    injectStyles: false,
    inlineStyles: true,
    inlineScripts: true,
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
});
