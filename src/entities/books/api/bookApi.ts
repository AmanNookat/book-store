import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_ENDPOINTS } from "@/shared/api"
import { Book } from "../model/interfaces"
import { instance } from "@/shared/api/instance"
import { deleteBookFromCart } from "@/features/cart"

export const getBooks = createAsyncThunk<Book[]>(
  "books/getBooks",
  async () => (await instance.get<Book[]>(API_ENDPOINTS.BOOKS)).data
)

export const getPopularBooks = createAsyncThunk<Book[]>(
  "books/getPopularBooks",
  async () =>
    (
      await instance.get<Book[]>(API_ENDPOINTS.BOOKS, {
        params: {
          _limit: 10,
          _sort: "rating",
          _order: "desc",
        },
      })
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
