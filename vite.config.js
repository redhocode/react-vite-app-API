/* eslint-disable no-undef */
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();
export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    'import.meta.env.REACT_APP_BASEURL': JSON.stringify(process.env.REACT_APP_BASEURL),
    'import.meta.env.REACT_APP_BASEIMGURL': JSON.stringify(process.env.REACT_APP_BASEIMGURL),
    'import.meta.env.REACT_APP_APIKEY': JSON.stringify(process.env.REACT_APP_APIKEY),
    'import.meta.env.REACT_APP_TOKEN': JSON.stringify(process.env.REACT_APP_TOKEN),
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
