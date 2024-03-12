import { cleanCart, getCartData } from "@/features/cart"
import { getCart } from "@/features/cart/model/slice"
import { API_ENDPOINTS } from "@/shared/api"
import { instance } from "@/shared/api/instance"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const createOrder = createAsyncThunk(
  "cart/createOrder",
  async ({ user, userCardData }: any, { dispatch }) => {
    const cart = getCartData()
    if (!cart.cards.length) return
    await instance.post(API_ENDPOINTS.ORDERS, { ...cart, user, userCardData })
    cleanCart()
    dispatch(getCart())
  }
)
