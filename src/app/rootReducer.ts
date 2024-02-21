import { usersSlice } from "@/features/auth/users/model/slice"
import { booksSlice } from "@/features/books/model/slice"
import { combineReducers } from "@reduxjs/toolkit"

export const rootReducer = combineReducers({
  [booksSlice.name]: booksSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
})
