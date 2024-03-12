import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUser } from "../../users/api/usersApi"

interface User {
  email: Email
  password: string
  id?: number
}

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (loginUser: User, { rejectWithValue, dispatch }) => {
    try {
      const checkUser = await dispatch(getUser(loginUser.email))

      if ((checkUser.payload as User).password === loginUser.password) {
        return checkUser.payload
      }
      return rejectWithValue("Пользователь не найден")
    } catch (err) {
      return rejectWithValue((err as Error).message)
    }
  }
)
