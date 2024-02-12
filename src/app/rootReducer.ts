import { booksSlice } from "@/entities/books/model/slice"
import { combineReducers } from "@reduxjs/toolkit"

export const rootReducer = combineReducers({
  [booksSlice.name]: booksSlice.reducer,
})
