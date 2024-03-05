import { authSlice } from "@/features/auth/users/model/slice"
import { booksSlice } from "@/features/books/model/slice"
import { combineReducers } from "@reduxjs/toolkit"

export const rootReducer = combineReducers({
  [booksSlice.name]: booksSlice.reducer,
  [authSlice.name]: authSlice.reducer,
})
