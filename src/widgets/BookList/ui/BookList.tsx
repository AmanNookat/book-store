import { BookCard } from "@/entities/books"
import { Book } from "@/entities/books/model/interfaces"
import { AddToFavoritesButton } from "@/features/favorites"
import style from "./BookList.module.scss"
import { useEffect, useRef } from "react"

interface Props<T extends Book> {
  books: T[]
  bookCardBottomSlot?: (item: T) => React.ReactNode
  bookCardActionsSlot?: (item: Id) => React.ReactNode
  isFetching?: boolean
  size?: "s" | "m"
}

export const BookList: React.FC<Props<Book>> = (props) => {
  const { isFetching, books, size } = props
  const list = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   list.current!.addEventListener("wheel", function (event) {
  //     if (event.deltaY !== 0) {
  //       event.preventDefault()
  //       this.scrollLeft += event.deltaY
  //     }
  //   })
  // }, [])

  const isAuthorized = false

  return (
    <div ref={list} className={style.root}>
      {books.map((book) => (
        <BookCard
          size={size}
          key={book.id}
          book={book}
          cartContentSlot={
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
