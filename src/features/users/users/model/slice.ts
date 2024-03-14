import { createSlice } from "@reduxjs/toolkit"
import { getUser } from "../api/usersApi"
import { removeAuth, saveAuth } from "@/shared/lib"
import { cleanCart } from "@/features/cart"
import { loginThunk } from "../../login"
import { toggleBookFavorites } from "@/features/favorites"
import { User } from ".."

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
      removeAuth()
      cleanCart()
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
        state.user.error = true
      })
      //? toggle favorites
      .addCase(toggleBookFavorites.pending, (state) => {
        state.user.loading = true
      })
      .addCase(toggleBookFavorites.fulfilled, (state, action) => {
        state.user.data = action.payload || null
        state.user.loading = false
      })
      .addCase(toggleBookFavorites.rejected, (state) => {
        state.user.loading = false
        state.user.error = true
      })
  },
})

export const { logout } = usersSlice.actions
