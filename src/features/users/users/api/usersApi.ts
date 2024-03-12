import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_ENDPOINTS, instance } from "@/shared/api"
import { User } from ".."

export const getUser = createAsyncThunk(
  "users/getUser",
  async (email: Email) => {
    const { data } = await instance.get<User[]>(API_ENDPOINTS.USERS)
    const user = data.find((elem) => elem.email === email)
    return user
  }
)

export const getUserProfile = createAsyncThunk(
  "users/getUsersProfile",
  async (email: Email, { dispatch }) => {
    const profile = await dispatch(getUser(email))
    return profile
  }
)
