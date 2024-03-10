import { createSlice } from "@reduxjs/toolkit"
import { saveAuth } from "@/shared/lib/auth"
import { User } from "../api/interfaces"
import { getUser } from "../api/usersApi"
import { loginThunk } from "../../login"
import { notify } from "@/shared/lib"

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
  reducers: {
    logout: (state, action) => {
      state.user.data = null
      localStorage.removeItem("readonly")
      action.payload("/")
      window.location.reload()
    },
  },
  extraReducers(builder) {
    builder
      //? login
      .addCase(loginThunk.pending, (state) => {
        state.user.loading = true
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user.loading = false
        saveAuth((action.payload as User).email)
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

export const { logout } = usersSlice.actions
