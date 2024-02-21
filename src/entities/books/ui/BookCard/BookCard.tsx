import { useNavigate } from "react-router-dom"
import { Book } from "../../model/interfaces"
import { Button } from "@/shared/ui"

interface Props {
  book: Book
  actionSlot?: React.ReactNode
  bottomContentSlot?: React.ReactNode
  size?: "s" | "m"
}

export const BookCard: React.FC<Props> = (props) => {
  const { size = "m", book, actionSlot, bottomContentSlot } = props
  const navigate = useNavigate()

  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <img
          src={book.coverImg}
          onClick={() => navigate(`/book/${book.id}`)}
          width="200"
        />
        <p>{book.price}</p>
        <p>{book.title}</p>
        <p>{book.athour}</p>
      </div>
      <Button>Купить</Button>
      {bottomContentSlot && <div>{bottomContentSlot}</div>}
      {actionSlot && <div>{actionSlot}</div>}
      {/* <div>
        <p>{book.rating}</p>
        <div>
          <button>Купить</button>
          <button>⭐</button>
        </div>
      </div> */}
    </div>
  )
}
