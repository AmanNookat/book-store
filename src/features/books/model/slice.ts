import { createSlice } from "@reduxjs/toolkit"
import { Book, BooksInitStateKey } from "@/entities/books/model/interfaces"
import { getPopularBooks } from "@/entities/books/api/bookApi"

interface InitState {
  books: BooksInitStateKey<Book[]>
  book: BooksInitStateKey<Book | null>
  popularBooks: BooksInitStateKey<Book[]>
}

const initialState: InitState = {
  books: {
    data: [],
    loading: false,
    error: false,
  },
  book: {
    data: null,
    loading: false,
    error: false,
  },
  popularBooks: {
    data: [],
    loading: false,
    error: false,
  },
}

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //? get popular books
      .addCase(getPopularBooks.pending, (state) => {
        state.popularBooks.loading = true
      })
      .addCase(getPopularBooks.fulfilled, (state, action) => {
        state.popularBooks.loading = false
        state.popularBooks.data = action.payload || []
      })
      .addCase(getPopularBooks.rejected, (state) => {
        state.popularBooks.error = true
        state.popularBooks.loading = false
      })
  },
})
