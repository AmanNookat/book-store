import { User } from "@/entities/users/model/interfaces"
import { createSlice } from "@reduxjs/toolkit"
import { loginThunk } from "../../login/model/login"
import { saveToken } from "@/shared/lib/token"

interface InitState {
  user: {
    data: User | null
    loading: boolean
    error: boolean
  }
}

const initialState: InitState = {
  user: {
    data: null,
    loading: false,
    error: false,
  },
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //? login
      .addCase(loginThunk.pending, (state) => {
        state.user.loading = true
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user.loading = false
        saveToken(action.payload.email)
        alert("Welcome")
      })
      .addCase(loginThunk.rejected, (state) => {
        state.user.loading = false
        state.user.error = true
      })
  },
})
