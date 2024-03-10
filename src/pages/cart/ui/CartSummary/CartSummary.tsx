import { cleanCart } from "@/features/cart"
import { Button } from "@/shared/ui"
import { useNavigate } from "react-router-dom"

interface Props {
  cartTotalCost: Som
  showCart: () => void
}

export const CartSummary: React.FC<Props> = ({ cartTotalCost, showCart }) => {
  const navigate = useNavigate()

  return (
    <div>
      <div>{cartTotalCost}с</div>
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
