import { createSlice } from "@reduxjs/toolkit"
import { Cart } from "@/entities/cart"
import { getCartData } from ".."

interface InitState {
  cart: {
    data: Cart | null
    loading: boolean
    error: boolean
  }
}

const initialState: InitState = {
  cart: {
    data: null,
    loading: false,
    error: false,
  },
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCart: (state) => {
      state.cart.data = getCartData()
    },
  },
})

export const { getCart } = cartSlice.actions
