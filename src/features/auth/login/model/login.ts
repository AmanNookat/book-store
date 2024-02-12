import { API_ENDPOINTS, baseAPI } from "@/shared/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface Params {
  email: Email
  password: string
}

export const loginThunk = createAsyncThunk<void, Params, { state: RootState }>(
  "sign-in",
  async (body: Params) => {
    try {
      const response = await axios.post(baseAPI + API_ENDPOINTS.USERS, body)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
