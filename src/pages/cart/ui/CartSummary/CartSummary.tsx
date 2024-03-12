import { cartBooksCount, cleanCart } from "@/features/cart"
import { Button } from "@/shared/ui"
import { useNavigate } from "react-router-dom"
import style from "./CartSummary.module.scss"

interface Props {
  cartTotalCost: Som
  showCart: () => void
}

export const CartSummary: React.FC<Props> = ({ cartTotalCost, showCart }) => {
  const navigate = useNavigate()

  return (
    <div className={style.root}>
      <div>Товаров: {cartBooksCount()}</div>
      <div>Итого: {cartTotalCost}с</div>
      <Button onClick={() => navigate("/user/orders")}>
        Перейти к оформлению
      </Button>
      <Button
        onClick={() => {
          cleanCart()
          showCart()
        }}
      >
        Очистить корзину
      </Button>
    </div>
  )
}
