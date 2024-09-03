import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { config } from "dotenv";

config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
  },
});
