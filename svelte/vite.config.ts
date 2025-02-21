import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: { customElement: true },
    }),
    tailwindcss(),
    federation({
      name: "svelteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./WCButton": "./src/lib/components/Button/Button.svelte",
        "./hello": "./src/lib/utils/helloWord.ts",
      },
      shared: ["svelte", "tailwindcss"],
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
