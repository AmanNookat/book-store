import { BookCard } from "@/entities/books"
import { Book } from "@/entities/books/model/interfaces"
import style from "./BookList.module.scss"
import { useEffect, useRef } from "react"
import { getAuth } from "@/shared/lib/auth"
import { FavoriteButton } from "@/features/favorites/favoritesActions/ui/FavoriteButton"

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

  const isAuthorized = getAuth()

  return (
    <div ref={list} className={style.root}>
      {books.map((book) => (
        <BookCard
          size={size}
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
