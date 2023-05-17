import { resolve } from "path";
import { defineConfig } from "vite";
import libCss from "vite-plugin-libcss";

export default defineConfig({
    build: {
        rollupOptions: {
            input: [
                resolve(__dirname, "index.html"),
                resolve(__dirname, "page/play.html"),
                resolve(__dirname, "page/video.html"),
                resolve(__dirname, "styles/play.css"),
                resolve(__dirname, "styles/video.css"),
                resolve(__dirname, "styles/style.css")
            ]
        }
    },
    plugins: [libCss()]
});