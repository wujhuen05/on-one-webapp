import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const appRoot = resolve(process.cwd(), 'stitch_campusflow_student_dashboard');

export default defineConfig({
  root: appRoot,
  server: { open: '/code.html' },
  build: {
    outDir: resolve(process.cwd(), 'dist'),
    emptyOutDir: true,
    rollupOptions: { input: resolve(appRoot, 'code.html') }
  }
});
