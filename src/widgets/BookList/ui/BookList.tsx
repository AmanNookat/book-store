import { Book, BookCard } from "@/entities/books"
import { useRef } from "react"
import { getAuth } from "@/shared/lib"
import { FavoriteButton } from "@/features/favorites"
import style from "./BookList.module.scss"

interface Props<T extends Book> {
  books: T[]
  bookCardBottomSlot?: (item: T) => React.ReactNode
  bookCardActionsSlot?: (item: Id) => React.ReactNode
  isFetching?: boolean
}

export const BookList: React.FC<Props<Book>> = (props) => {
  const { books } = props
  const list = useRef<HTMLDivElement>(null)

  const isAuthorized = getAuth()

  return (
    <div ref={list} className={style.root}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          actionSlot={
            props.bookCardActionsSlot
              ? props.bookCardActionsSlot(book.id!)
              : isAuthorized && (
                  <FavoriteButton
                    book={{
                      title: book.title,
                      author: book.author,
                      coverImg: book.coverImg,
                      id: book.id!,
                    }}
                  />
                )
          }
        />
      ))}
    </div>
  )
}
