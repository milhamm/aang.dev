import stylex from '@stylexjs/unplugin/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  const isDev = mode === 'development' || command === 'serve';

  return {
    resolve: { tsconfigPaths: true },
    plugins: [
      stylex({
        useCSSLayers: true,
        dev: isDev,
        devMode: 'full',
        runtimeInjection: false
      }),
      tanstackStart(),
      viteReact(),
      nitro()
    ]
  };
});
