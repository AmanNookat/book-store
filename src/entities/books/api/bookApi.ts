import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_ENDPOINTS } from "@/shared/api"
import { Book } from "../model/interfaces"
import { instance } from "@/shared/api/instance"

export const getBooks = createAsyncThunk<Book[], void>(
  "books/getBooks",
  async () => {
    try {
      const { data } = await instance.get<Book[]>(API_ENDPOINTS.BOOKS)
      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }
)

export const getPopularBooks = createAsyncThunk<Book[], void>(
  "books/getPopularBooks",
  async () => {
    try {
      const { data } = await instance.get<Book[]>(API_ENDPOINTS.BOOKS, {
        params: {
          _page: 1,
          _limit: 2,
          _sort: "rating",
          _order: "desc",
        },
      })
      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }
)
