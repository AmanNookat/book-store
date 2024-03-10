import { useAppDispatch, useAppSelector } from "@/shared/model"
import { CartList } from "../CartList/CartList"
import { CartSummary } from "../CartSummary/CartSummary"
import { useEffect } from "react"
import { getCart } from "@/features/cart/model/slice"

export const CartPage = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCart())
  }, [])

  return (
    <div>
      {cart && cart.data?.books.length ? (
        <>
          <CartList cartBooks={cart.data.books} />
          <CartSummary cartTotalPrice={cart.data.totalPrice} />
        </>
      ) : (
        <h1>Корзина пуста</h1>
      )}
    </div>
  )
}
