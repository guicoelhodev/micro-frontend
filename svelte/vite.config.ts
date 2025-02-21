import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
    federation({
      name: "svelte-app",
      filename: "remoteEntry.js",
      exposes: {
        "./mountButton": "./src/lib/components/Button/mount.ts",
      },
      shared: ["svelte"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5556,
  },
});
