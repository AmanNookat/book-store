import { Cart, CartBookObj } from "@/entities/cart"
import { CartBookCard } from "@/entities/cart/ui/CartBookCard/CartBookCard"

interface Props {
  cartBooks: CartBookObj[]
}

export const CartList: React.FC<Props> = ({ cartBooks }) => {
  return (
    <div>
      {cartBooks.map((book) => (
        <CartBookCard cartBook={book.bookItem} key={book.bookItem.id} />
      ))}
    </div>
  )
}
