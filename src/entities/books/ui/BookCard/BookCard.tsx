import { useNavigate } from "react-router-dom"
import { Book } from "../../model/interfaces"
import { Button } from "@/shared/ui"
import { textCut } from "@/shared/lib"
import style from "./BookCard.module.scss"
import cn from "classnames"
import { toggleBookToCart } from "@/features/cart"
import { CartBookItem } from "@/entities/cart"

interface Props {
  book: Book
  actionSlot?: React.ReactNode
  size?: "s" | "m"
}

export const BookCard: React.FC<Props> = (props) => {
  const { size = "m", book, actionSlot } = props
  const navigate = useNavigate()

  const cartBook: CartBookItem = {
    title: book.title,
    author: book.author,
    coverImage: book.coverImg,
    price: book.price,
    id: +book.id!,
  }

  return (
    <div className={cn(style.root, "shadow")}>
      <div>
        <div
          className={style.image}
          onClick={() => navigate(`/book/${book.id}`)}
          style={{ backgroundImage: `url(${book.coverImg})` }}
        ></div>
        <div>
          <p className={cn(style.price, "text-bold", "text-lg")}>
            {book.price}с
          </p>
          <h3> {textCut(book.title)}</h3>
          <p className={style.author}>{book.author}</p>
        </div>
      </div>
      <div className={style.card_bottom}>
        <Button onClick={() => toggleBookToCart(cartBook)}>Купить</Button>
        {actionSlot && <div>{actionSlot}</div>}
      </div>
    </div>
  )
}
