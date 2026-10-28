import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const appRoot = resolve(process.cwd(), 'stitch_campusflow_student_dashboard');
const processPage = resolve(process.cwd(), 'process.html');
const outputDir = resolve(process.cwd(), 'dist');

export default defineConfig({
  root: appRoot,
  server: { open: '/' },
  plugins: [{
    name: 'copy-standalone-process-page',
    apply: 'build',
    closeBundle() {
      const destination = resolve(outputDir, 'process.html');
      mkdirSync(dirname(destination), { recursive: true });
      copyFileSync(processPage, destination);
    }
  }],
  build: {
    outDir: outputDir,
    emptyOutDir: true,
    rollupOptions: {
      input: { main: resolve(appRoot, 'index.html') }
    }
  }
});
