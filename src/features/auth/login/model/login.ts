import { findUser } from "@/entities/users/api/usersApi"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface User {
  email: Email
  password: string
  id?: number
}

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (loginUser: User, { rejectWithValue, dispatch }) => {
    try {
      const checkUser = await dispatch(findUser(loginUser.email))

      if ((checkUser.payload as User).password === loginUser.password) {
        return checkUser.payload
      }
      return rejectWithValue("Пользователь не найден")
    } catch (err) {
      return rejectWithValue((err as Error).message)
    }
  }
)
