import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { compression } from "vite-plugin-compression2";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            src: resolve(__dirname, "src"),
        },
    },
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                // svgr options
            },
        }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 20,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
        }),
        compression({
            algorithm: "brotliCompress",
            exclude: [/\.(br)$/],
            deleteOriginalAssets: true,
        }),
    ],
    build: { brotliSize: true, reportCompressedSize: false },
});
