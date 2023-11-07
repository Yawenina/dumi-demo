import { defineConfig } from 'dumi';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/dumi-demo/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/dumi-demo/` : '/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-demo',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'hook', dir: 'src/hooks' },
      { type: 'design-patterns', dir: 'src/design-patterns' },
      { type: 'performance', dir: 'src/performance' },
    ],
  },
});
