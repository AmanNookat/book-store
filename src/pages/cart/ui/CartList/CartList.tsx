import { CartBookObj } from "@/entities/cart"
import { CartBookCard } from "@/entities/cart/ui/CartBookCard/CartBookCard"
import { changeCountBooksInCart, deleteBookFromCart } from "@/features/cart"

import { Button, Icon, Input } from "@/shared/ui"
import { ChangeEvent } from "react"

interface Props {
  cartBooks: CartBookObj[]
  showCart: () => void
}

export const CartList: React.FC<Props> = ({ cartBooks, showCart }) => {
  return (
    <div>
      {cartBooks.map((cartBook) => (
        <div
          key={cartBook.bookItem.id}
          style={{ display: "flex", border: "1px solid black" }}
        >
          <CartBookCard cartBook={cartBook.bookItem} />
          <Input
            type="number"
            value={cartBook.count}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              changeCountBooksInCart(cartBook.bookItem.id, +e.target.value)
              showCart()
            }}
            style={{ width: "50px", marginLeft: "20px" }}
          />
          <div style={{ color: "red" }}>{cartBook.totalPrice}с</div>
          <Button
            onClick={() => {
              deleteBookFromCart(cartBook.bookItem.id)
              showCart()
            }}
          >
            <Icon type="trash" />
          </Button>
        </div>
      ))}
    </div>
  )
}
