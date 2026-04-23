import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isPublicBuild = mode === "public";

  return {
    plugins: [react()],
    build: isPublicBuild
      ? {
          outDir: resolve(__dirname, "..", "public"),
          emptyOutDir: false,
          assetsDir: "recruit-carma-partner-assets",
          rollupOptions: {
            input: {
              "recruit-carma-partner": resolve(__dirname, "recruit-carma-partner.html"),
              "muto-lab": resolve(__dirname, "muto-lab.html")
            }
          }
        }
      : undefined
  };
});
