import { booksSlice } from "@/features/books"
import { cartSlice } from "@/features/cart"
import { usersSlice } from "@/features/users/users"
import { combineReducers } from "@reduxjs/toolkit"

export const rootReducer = combineReducers({
  [booksSlice.name]: booksSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
})
