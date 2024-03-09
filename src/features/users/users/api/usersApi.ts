import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "@/shared/api/instance"
import { API_ENDPOINTS } from "@/shared/api"
import { User } from "./interfaces"

export const getUser = createAsyncThunk(
  "users/getUser",
  async (email: Email) => {
    const { data } = await instance.get<User[]>(API_ENDPOINTS.USERS)
    return data.find((elem) => elem.email === email)
  }
)

export const getUserProfile = createAsyncThunk(
  "users/getUsersProfile",
  async (email: Email, { dispatch }) => {
    const profile = await dispatch(getUser(email))
    return profile
  }
)
