import { API_ENDPOINTS } from "@/shared/api"
import { instance } from "@/shared/api/instance"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUser } from "../../users/api/usersApi"

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
      alert("Успешно")
      return userObj
    } catch (err) {
      return Promise.reject(err)
    }
  }
)
