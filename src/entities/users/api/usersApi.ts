import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "@/shared/api/instance"
import { User } from "../model/interfaces"
import { API_ENDPOINTS } from "@/shared/api"

export const findUser = createAsyncThunk(
  "users/findUser",
  async (email: Email) => {
    const { data } = await instance.get<User[]>(API_ENDPOINTS.USERS)
    return data.find((elem) => elem.email === email)
  }
)

// export const getUserProfile = createAsyncThunk(
//   "users/getUsersProfile",
//   async (email: Email) => {
//     const authUser = getAuth()

//   }
// )
