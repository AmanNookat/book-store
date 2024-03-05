import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_ENDPOINTS } from "@/shared/api"
import { Book } from "../model/interfaces"
import { instance } from "@/shared/api/instance"

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
