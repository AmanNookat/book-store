import { defineConfig } from "vite" // используется для создания объекта конфигурации
import react from "@vitejs/plugin-react" // плагин, предназначенный для работы с React-приложениями
import path from "path" // предоставляет утилиты для работы с путями к файлам и директориям

export default defineConfig({
  plugins: [react()], // plugins - свойство конфига, определяющий плагины
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  }, // Это свойство конфигурации позволяет настраивать разрешение путей к модулям. Здесь мы определяем псевдоним @, который будет заменен на абсолютный путь к папке src в текущем рабочем каталоге, используя функцию path.resolve(). __dirname - это глобальная переменная в Node.js, содержащая путь к текущему файлу.
})
