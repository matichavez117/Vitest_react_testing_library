import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment:'happy-dom'
    },
    server: {
        port:8000,
    }
})