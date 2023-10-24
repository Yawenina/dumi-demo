import { defineConfig } from 'dumi';

export default defineConfig({
  publicPath: '/dumi-demo',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-demo',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'hook', dir: 'src/hooks' },
      { type: 'design-patterns', dir: 'src/design-patterns' },
    ],
  },
});
