import { getPopularBooks } from "@/entities/books/api/bookApi"
import { useAppSelector, useAppDispatch } from "@/shared/model/hooks"
import { BookList } from "@/widgets/BookList"
import { useEffect } from "react"

export const PopularBookList = () => {
  const { popularBooks } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getPopularBooks())
  }, [])

  return (
    <div>
      <h1>В топе по рейтингу</h1>
      <BookList books={popularBooks.data} />
    </div>
  )
}
