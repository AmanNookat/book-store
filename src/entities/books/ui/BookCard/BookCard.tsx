import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui"
import { textCut } from "@/shared/lib"
import style from "./BookCard.module.scss"
import cn from "classnames"
import { addBookToCart, checkBookInCart } from "@/features/cart"
import { useAppSelector } from "@/shared/model"
import { useEffect, useState } from "react"
import { Book } from "../.."

interface Props {
  book: Book
  actionSlot?: React.ReactNode
  size?: "s" | "m"
}

export const BookCard: React.FC<Props> = ({ book, actionSlot, size = "m" }) => {
  const { cart } = useAppSelector((state) => state.cart)
  const [bookInCart, setBookInCart] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setBookInCart(checkBookInCart(book.id!))
  }, [cart])

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
          <h3>{textCut(book.title)}</h3>
          <p className={style.author}>{book.author}</p>
        </div>
      </div>
      <div className={style.card_bottom}>
        <Button
          theme={bookInCart ? "primary" : undefined}
          onClick={() => {
            setBookInCart(true)

            return bookInCart
              ? navigate("/user/cart")
              : addBookToCart({
                  title: book.title,
                  author: book?.author,
                  coverImg: book.coverImg,
                  price: book.price,
                  id: book.id!,
                })
          }}
          disabled={!book?.quantity}
        >
          {book.quantity >= 1
            ? bookInCart
              ? "Оформить"
              : "Купить"
            : "Распродано"}
        </Button>
        {actionSlot && <div>{actionSlot}</div>}
      </div>
    </div>
  )
}
