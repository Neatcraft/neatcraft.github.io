import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config alt="liens vers astro"
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
});
