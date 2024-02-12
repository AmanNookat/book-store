import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { API_ENDPOINTS, baseAPI } from "@/shared/api"
import { Book } from "../model/interfaces"

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  try {
    const { data } = await axios.get<Book[]>(
      baseAPI + API_ENDPOINTS.BOOKS + "sdf"
    )
    return data
  } catch (err) {
    console.log(err)
  }
})
