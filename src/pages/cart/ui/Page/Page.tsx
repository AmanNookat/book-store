import { useAppDispatch, useAppSelector } from "@/shared/model"
import { useCallback, useEffect } from "react"
import { Loader } from "@/shared/ui"
import { getCart } from "@/features/cart"
import { CartList } from "@/widgets/CartList"
import { CartSummary } from "@/widgets/CartSummary"
import style from "./Page.module.scss"

export const CartPage = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const showCart = useCallback(() => {
    dispatch(getCart())
  }, [])

  useEffect(() => {
    showCart()
  }, [])

  if (cart.loading) {
    return <Loader color="blue" size="l" />
  }

  if (cart.error) {
    return <div>Error</div>
  }

  return (
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
