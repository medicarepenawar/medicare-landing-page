import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const NGROK_TARGET = "https://1114-103-165-156-164.ngrok-free.app";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: NGROK_TARGET,
        changeOrigin: true,
        secure: true,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      },
      "/storage": {
        target: NGROK_TARGET,
        changeOrigin: true,
        secure: true,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      },
    },
  },
});
