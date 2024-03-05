import { findUser } from "@/entities/users/api/usersApi"
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
  async (regUser: User, { dispatch, rejectWithValue }) => {
    try {
      const checkUser = await dispatch(findUser(regUser.email))
      if (checkUser) return rejectWithValue("Такой пользователь уже существует")

      const userObj = {
        ...regUser,
        isAdmin: false,
        nickname: "",
        image: "",
        age: 0,
        about: "",
      }
      await instance.post(API_ENDPOINTS.USERS, userObj)
      alert("Успешно")
      return userObj
    } catch (err) {
      return Promise.reject(err)
    }
  }
)
