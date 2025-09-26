import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Suri/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/shared": path.resolve(__dirname, "./src/shared"),
      "@/features": path.resolve(__dirname, "./src/features"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/context": path.resolve(__dirname, "./src/context"),
      "@/layout": path.resolve(__dirname, "./src/layout"),
    },
  },
}));
