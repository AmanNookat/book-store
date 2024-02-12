import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer"

export function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
  return store
}

export const appStore = makeStore()

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
