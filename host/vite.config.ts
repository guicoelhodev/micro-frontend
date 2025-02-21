import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		svelte(),
		federation({
			name: "host-app",
			remotes: {
				svelteApp: "http://localhost:5556/assets/remoteEntry.js",
				reactApp: "http://localhost:5555/assets/remoteEntry.js",
			},
			shared: ["react", "react-dom"],
		}),
	],
	server: {
		port: 8080,
	},
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
