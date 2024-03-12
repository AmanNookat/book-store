import { CartBookObj } from "@/entities/cart"
import { CartBookCard } from "@/entities/cart/ui/CartBookCard/CartBookCard"
import { changeCountBooksInCart, deleteBookFromCart } from "@/features/cart"
import { Button, Icon, Input } from "@/shared/ui"
import { ChangeEvent } from "react"
import style from "./CartList.module.scss"
import cn from "classnames"

interface Props {
  cartBooks: CartBookObj[]
  showCart: () => void
}

export const CartList: React.FC<Props> = ({ cartBooks, showCart }) => {
  return (
    <div className={style.root}>
      {cartBooks.map((cartBook) => (
        <div
          className={cn(style.cartItem, "shadow")}
          key={cartBook.bookItem.id}
        >
          <CartBookCard cartBook={cartBook.bookItem} />
          <div className={style.cartItem_options}>
            <div>
              <div>
                Цена:{" "}
                <span className={cn(style.price, "text-lg", "text-bold")}>
                  {cartBook.totalPrice}с
                </span>
              </div>
              <label>Кол-во: </label>
              <Input
                type="number"
                value={cartBook.count}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  changeCountBooksInCart(cartBook.bookItem.id, +e.target.value)
                  showCart()
                }}
              />
            </div>
            <Button
              onClick={() => {
                deleteBookFromCart(cartBook.bookItem.id)
                showCart()
              }}
            >
              <Icon type="trash" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
