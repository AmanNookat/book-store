import { API_ENDPOINTS, instance } from "@/shared/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { notify } from "@/shared/lib"
import { getUser } from "../../users"

interface User {
  email: string
  password: string
  id?: number
}

export const registerThunk = createAsyncThunk(
  "auth/registration",
  async (regUser: User, { dispatch, rejectWithValue }) => {
    try {
      const checkUser = await dispatch(getUser(regUser.email))
      if (!checkUser)
        return rejectWithValue("Такой пользователь уже существует")

      const userObj = {
        ...regUser,
        isAdmin: false,
        nickname: "",
        image: "",
        age: 0,
        about: "",
      }
      await instance.post(API_ENDPOINTS.USERS, userObj)
      notify("Регистрация прошла успешно")
      return userObj
    } catch (err) {
      return Promise.reject(err)
    }
  }
)
