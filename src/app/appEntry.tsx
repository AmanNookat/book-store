import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { store } from "./appStore"
import { appRouter } from "./appRouter"
import { Provider as ModalProvider } from "@ebay/nice-modal-react"
import "@/shared/global.scss"

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <RouterProvider router={appRouter} />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
)
