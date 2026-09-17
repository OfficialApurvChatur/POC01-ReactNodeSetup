import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const path = mode === "production" ? "." : "./env";
  const environment = loadEnv(mode, path, "");
  
  console.log(`Environment connection created successfully at path: "${path}"`)

  return {
    plugins: [react()],
    envDir: path,
    server: {
      port: Number(environment.VITE_PORT)
    }
  };
})
