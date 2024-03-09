import { createSlice } from "@reduxjs/toolkit"
import { saveAuth } from "@/shared/lib/auth"
import { User } from "../api/interfaces"
import { getUser } from "../api/usersApi"
import { loginThunk } from "../../login"

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
        saveAuth((action.payload as User).email)
        alert("Welcome")
      })
      .addCase(loginThunk.rejected, (state) => {
        state.user.loading = false
        state.user.error = true
      })
      //? get user
      .addCase(getUser.pending, (state) => {
        state.user.loading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user.data = action.payload || null
        state.user.loading = false
      })
      .addCase(getUser.rejected, (state) => {
        state.user.loading = false
        state.user.error = false
      })
  },
})
