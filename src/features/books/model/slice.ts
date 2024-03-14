import { createSlice } from "@reduxjs/toolkit"
import {
  Book,
  BookCategory,
  BooksInitStateKey,
  getBooks,
  getOneBook,
  getPopularBooks,
} from "@/entities/books"

interface InitState {
  books: BooksInitStateKey<Book[]>
  book: BooksInitStateKey<Book | null>
  popularBooks: BooksInitStateKey<Book[]>
  currentPage: number
  totalPages: number
  currentCategory: BookCategory | ""
  search: string
  priceRange: string
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
  currentPage: 1,
  totalPages: 1,
  currentCategory: "",
  search: "",
  priceRange: "",
}

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearBookState: (state) => {
      state.book.data = null
    },
    changePage: (state, action) => {
      state.currentPage = action.payload.page
    },
    changeCategory: (state, action) => {
      if (action.payload.category === "все") {
        state.currentCategory = ""
      } else {
        state.currentCategory = action.payload.category
      }
      state.currentPage = 1
    },
    setSearchVal: (state, action) => {
      state.search = action.payload.search
      state.currentPage = 1
    },
    setPriceRangeState: (state, action) => {
      const { minPrice, maxPrice } = action.payload
      if (minPrice && maxPrice) {
        state.priceRange = `&price_gte=${minPrice}&price_lte=${maxPrice}`
      } else if (minPrice && !maxPrice) {
        state.priceRange = `&price_gte=${minPrice}`
      } else if (maxPrice && !minPrice) {
        state.priceRange = `&price_lte=${maxPrice}`
      } else {
        state.priceRange = ""
      }
    },
    clearAllFilters: (state) => {
      state.currentPage = 1
      state.currentCategory = ""
      state.search = ""
      state.priceRange = ""
    },
  },
  extraReducers(builder) {
    builder
      //? get books
      .addCase(getBooks.pending, (state) => {
        state.books.loading = true
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books.loading = false
        state.books.data = action.payload.data || []
        state.totalPages = action.payload.totalPages
      })
      .addCase(getBooks.rejected, (state) => {
        state.books.error = true
        state.books.loading = false
      })
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
      //? get one book
      .addCase(getOneBook.pending, (state) => {
        state.book.loading = true
      })
      .addCase(getOneBook.fulfilled, (state, action) => {
        state.book.data = action.payload
        state.book.loading = false
      })
      .addCase(getOneBook.rejected, (state) => {
        state.book.error = true
        state.book.loading = false
      })
  },
})

export const {
  clearBookState,
  changePage,
  setSearchVal,
  changeCategory,
  setPriceRangeState,
  clearAllFilters,
} = booksSlice.actions
