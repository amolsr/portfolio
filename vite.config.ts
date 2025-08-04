import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine base URL based on environment
  let base = '/';
  
  // For GitHub Pages deployment, uncomment and set your repository name
  // if (mode === 'production') {
    base = 'https://amolsr.github.io/portfolio/'; // Replace with your actual repo name
  // }
  
  // For custom domain or root hosting, keep base as '/'
  
  return {
    // Base public path when served in production
    base,
    
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
