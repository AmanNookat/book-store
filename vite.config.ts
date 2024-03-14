import { defineConfig } from "vite" // используется для создания объекта конфигурации
import react from "@vitejs/plugin-react" // плагин, предназначенный для работы с React-приложениями
import path from "path" // предоставляет утилиты для работы с путями к файлам и директориям

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
})
