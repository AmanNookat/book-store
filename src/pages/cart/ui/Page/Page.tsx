import { useAppDispatch, useAppSelector } from "@/shared/model"
import { CartList } from "../CartList/CartList"
import { CartSummary } from "../CartSummary/CartSummary"
import { useCallback, useEffect } from "react"
import { getCart } from "@/features/cart/model/slice"

export const CartPage = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const showCart = useCallback(() => {
    dispatch(getCart())
  }, [])

  useEffect(() => {
    showCart()
  }, [])

  return (
    <div>
      {cart && cart.data?.books.length ? (
        <>
          <CartList cartBooks={cart.data.books} showCart={showCart} />
          <CartSummary
            cartTotalCost={cart.data.totalCost}
            showCart={showCart}
          />
        </>
      ) : (
        <h1>Корзина пуста</h1>
      )}
    </div>
  )
}
