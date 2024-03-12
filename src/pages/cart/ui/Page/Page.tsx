import { useAppDispatch, useAppSelector } from "@/shared/model"
import { CartList } from "../CartList/CartList"
import { CartSummary } from "../CartSummary/CartSummary"
import { useCallback, useEffect } from "react"
import { getCart } from "@/features/cart/model/slice"
import style from "./Page.module.scss"
import cn from "./Page.module.scss"
import { Loader } from "@/shared/ui/Loader/Loader"

export const CartPage = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const showCart = useCallback(() => {
    dispatch(getCart())
  }, [])

  useEffect(() => {
    showCart()
  }, [])

  return cart.loading ? (
    <Loader color="blue" size="l" />
  ) : cart.error ? (
    <div>Error</div>
  ) : (
    <div className={style.root}>
      {cart && cart.data?.books.length ? (
        <>
          <CartList cartBooks={cart.data.books} showCart={showCart} />
          <CartSummary
            cartTotalCost={cart.data.totalCost}
            showCart={showCart}
          />
        </>
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt=""
          width={"50%"}
        />
      )}
    </div>
  )
}
