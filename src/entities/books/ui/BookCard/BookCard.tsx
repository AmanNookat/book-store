import { useNavigate } from "react-router-dom"
import { Book } from "../../model/interfaces"
import { Button, Icon } from "@/shared/ui"
import style from "./BookCard.module.scss"
import cn from "classnames"
import { textCut } from "@/shared/lib/text-cut"

interface Props {
  book: Book
  actionSlot?: React.ReactNode
  cartContentSlot?: React.ReactNode
  size?: "s" | "m"
}

export const BookCard: React.FC<Props> = (props) => {
  const { size = "m", book, actionSlot, cartContentSlot } = props
  const navigate = useNavigate()

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
        {cartContentSlot ? (
          <div>{cartContentSlot}</div>
        ) : (
          <Button>Купить</Button>
        )}
        {actionSlot && <div>{actionSlot}</div>}
      </div>
    </div>
  )
}
