import { API_ENDPOINTS } from "@/shared/api"
import { instance } from "@/shared/api/instance"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface User {
  email: string
  password: string
  id?: number
}

export const registerThunk = createAsyncThunk(
  "auth/registration",
  async (regUser: User) => {
    try {
      const { data } = await instance.get<User[]>(API_ENDPOINTS.USERS)

      const checkUser = data.find((user: User) => user.email === regUser.email)

      if (checkUser) {
        alert("Такой пользователь уже есть")
        throw new Error("Такой пользователь уже есть")
      } else {
        instance.post(API_ENDPOINTS.USERS, regUser)
        alert("Регистрация прошла успешно")
      }
      return regUser
    } catch (err) {
      return Promise.reject(err)
    }
  }
)
