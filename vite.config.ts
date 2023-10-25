import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePWA({
    //   manifest: {
    //     name: "The PWA App",
    //     short_name: "Quero Educação",
    //     start_url: "/",
    //     display: "standalone",
    //     description: "A description for your application",
    //     lang: "pt-BR",
    //     dir: "ltr",
    //     theme_color: "#000000",
    //     background_color: "#000000",
    //     orientation: "any",
    //     icons: [
    //       {
    //         src: "https://www.pwabuilder.com/assets/icons/icon_512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "maskable",
    //       },
    //       {
    //         src: "https://www.pwabuilder.com/assets/icons/icon_192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //         purpose: "any",
    //       },
    //     ],
    //     screenshots: [
    //       {
    //         src: "https://www.pwabuilder.com/assets/screenshots/screen1.png",
    //         sizes: "2880x1800",
    //         type: "image/png",
    //         description: "A screenshot of the home page",
    //       },
    //     ],
    //     prefer_related_applications: false,
    //     shortcuts: [
    //       {
    //         name: "The name you would like to be displayed for your shortcut",
    //         url: "The url you would like to open when the user chooses this shortcut. This must be a URL local to your PWA. For example: If my start_url is /, this URL must be something like /shortcut",
    //         description: "A description of the functionality of this shortcut",
    //       },
    //     ],
    //   },
    //   // strategies: 'injectManifest',
    //   // srcDir: 'src',
    //   // swSrc: 'src/sw.js',  // Verify that this path is correct
    //   // swDest: 'dist/sw.js', // Adjust paths as needed
    // })
  ],
  server: {
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    },
  },
  // build: {
  //   rollupOptions: {
  //     // ... other rollup options ...
  //     external: ['workbox-precaching'],
  //   },
  // },
})
