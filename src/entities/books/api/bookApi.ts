import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_ENDPOINTS, instance } from "@/shared/api"
import { Book } from "../model/interfaces"

const getTotalPages = async (url: Url) => {
  const { data } = await instance.get(url)
  const totalPages = Math.ceil(data.length / 10)
  return totalPages
}

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, { getState }) => {
    const { currentPage, currentCategory, search, priceRange } = (
      getState() as RootState
    ).books
    const categoryAndSearchParams = `q=${search}${
      currentCategory && `&category=${currentCategory}`
    }`

    const pagesLimitParams = `?_page=${currentPage}&_limit=10`
    const totalPages = await getTotalPages(
      `${API_ENDPOINTS.BOOKS}?${categoryAndSearchParams}${priceRange}`
    )

    const { data } = await instance.get(
      `${API_ENDPOINTS.BOOKS}${pagesLimitParams}&${categoryAndSearchParams}${priceRange}`
    )

    return { data, totalPages }
  }
)

export const getPopularBooks = createAsyncThunk<Book[]>(
  "books/getPopularBooks",
  async () =>
    (
      await instance.get<Book[]>(
        `${API_ENDPOINTS.BOOKS}?_limit=10&_sort=rating&_order=desc`
      )
    ).data
)

export const getOneBook = createAsyncThunk<Book, number>(
  "books/getOneBook",
  async (id) => (await instance.get<Book>(`${API_ENDPOINTS.BOOKS}/${id}`)).data
)

export const addBook = createAsyncThunk("books/addBook", async (data: Book) => {
  const bookObj: Book = {
    ...data,
    pages: +data.pages,
    price: +data.price,
    year: +data.year,
    quantity: +data.quantity,
    images: [],
    sale: 0,
    rating: 0,
  }
  await instance.post(API_ENDPOINTS.BOOKS, bookObj)
})

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId: number) =>
    await instance.delete(`${API_ENDPOINTS.BOOKS}/${bookId}`)
)

export const editBook = createAsyncThunk(
  "books/editBook",
  async (editedBook: Book, { dispatch }) => {
    await instance.patch(`${API_ENDPOINTS.BOOKS}/${editedBook.id}`, editedBook)
    dispatch(getOneBook(editedBook.id!))
  }
)
