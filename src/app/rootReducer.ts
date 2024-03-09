import { booksSlice } from "@/features/books/model/slice"
import { usersSlice } from "@/features/users/users/model/slice"
import { combineReducers } from "@reduxjs/toolkit"

export const rootReducer = combineReducers({
  [booksSlice.name]: booksSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
})
