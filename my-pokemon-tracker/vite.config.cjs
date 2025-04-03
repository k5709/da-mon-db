
const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
});