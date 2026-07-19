import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  envPrefix: ["VITE_", "REACT_APP_"],
  define: {
    // CRA used process.env; Vite uses import.meta.env — map them
    "process.env": "import.meta.env",
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
  ],
  optimizeDeps: {
    esbuildOptions: { loader: { ".js": "jsx" } },
  },
  assetsInclude: ["**/*.JPG"],
  build: {
    outDir: "dist/client",
  },
});
