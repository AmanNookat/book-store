import { BookCard } from "@/entities/books"
import { Book } from "@/entities/books/model/interfaces"
import { AddToFavoritesButton } from "@/features/favorites"

interface Props<T extends Book> {
  books: T[]
  bookCardBottomSlot?: (item: T) => React.ReactNode
  bookCardActionsSlot?: (item: Id) => React.ReactNode
  isFetching?: boolean
  size?: "s" | "m"
}

export const BookList: React.FC<Props<Book>> = (props) => {
  const { isFetching, books, size } = props

  const isAuthorized = false

  return (
    <div style={{ display: "flex" }}>
      {books.map((book) => (
        <BookCard
          size={size}
          key={book.id}
          book={book}
          bottomContentSlot={
            props.bookCardBottomSlot
              ? props.bookCardBottomSlot(book)
              : undefined
          }
          actionSlot={
            props.bookCardActionsSlot
              ? props.bookCardActionsSlot(book.id)
              : isAuthorized && <AddToFavoritesButton />
          }
        />
      ))}
    </div>
  )
}
