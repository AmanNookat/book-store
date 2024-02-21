import { API_ENDPOINTS } from "@/shared/api"
import { instance } from "@/shared/api/instance"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface User {
  email: Email
  password: string
  id?: number
}

export const loginThunk = createAsyncThunk<User, User, { rejectValue: string }>(
  "auth/login",
  async (loginUser: User, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<User[]>(API_ENDPOINTS.USERS)
      const checkUser = data.find(
        (user: User) => user.email === loginUser.email
      )
      console.log(checkUser)

      if (checkUser) {
        return checkUser
      } else {
        return rejectWithValue("Пользователь не найден")
      }
    } catch (err) {
      return Promise.reject(err)
    }
  }
)
