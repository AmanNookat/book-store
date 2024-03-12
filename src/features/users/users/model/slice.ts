import { createSlice } from "@reduxjs/toolkit"
import { saveAuth } from "@/shared/lib/auth"
import { User } from "../api/interfaces"
import { getUser } from "../api/usersApi"
import { loginThunk } from "../../login"
import { notify } from "@/shared/lib"
import { toggleBookFavorites } from "@/features/favorites/favoritesActions/model/toggleFavorites"
import { cleanCart } from "@/features/cart"

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
