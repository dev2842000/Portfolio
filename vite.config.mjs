import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

export default defineConfig({
  envPrefix: ["VITE_", "REACT_APP_"],
  define: {
    // Define each CRA-style var individually — mapping process.env to
    // import.meta.env crashes SSR because import.meta.env is undefined in Node
    "process.env.REACT_APP_EMAILJS_SERVICE_ID": JSON.stringify(process.env.REACT_APP_EMAILJS_SERVICE_ID || ""),
    "process.env.REACT_APP_EMAILJS_TEMPLATE_ID": JSON.stringify(process.env.REACT_APP_EMAILJS_TEMPLATE_ID || ""),
    "process.env.REACT_APP_EMAILJS_PUBLIC_KEY": JSON.stringify(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ""),
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
  },
  plugins: [
    // Pre-transform .js files containing JSX before Vite's import analysis
    {
      name: "js-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, { loader: "jsx", jsx: "automatic" });
      },
    },
    react({ include: /\.(js|jsx|ts|tsx)$/ }),
    {
      name: "sitemap-lastmod",
      closeBundle() {
        const sitemap = path.resolve(__dirname, "dist/client/sitemap.xml");
        if (!fs.existsSync(sitemap)) return;
        const today = new Date().toISOString().slice(0, 10);
        fs.writeFileSync(sitemap, fs.readFileSync(sitemap, "utf8").replace(/<lastmod>.*<\/lastmod>/, `<lastmod>${today}</lastmod>`));
      },
    },
  ],
  optimizeDeps: {
    esbuildOptions: { loader: { ".js": "jsx" } },
  },
  assetsInclude: ["**/*.JPG"],
  build: {
    outDir: "dist/client",
  },
});
