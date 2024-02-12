import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Book } from "./interfaces"
import { getBooks } from "../api/bookApi"

interface InitState {
  books: Book[]
  loading: boolean
  error: any
}

const initialState: InitState = {
  books: [],
  loading: false,
  error: null,
}

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getBooks.fulfilled,
        (state, action: PayloadAction<Book[] | void>) => {
          state.books = action.payload || []
        }
      )
      .addCase(getBooks.rejected, (state, action) => {
        state.error = action.payload
      })
  },
})
