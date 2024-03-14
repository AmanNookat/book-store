import { useEffect } from "react"
import { BookList } from "@/widgets/BookList"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { getPopularBooks } from "@/entities/books"
import { Loader } from "@/shared/ui"
import style from "./PopularBooks.module.scss"

export const PopularBookList = () => {
  const { popularBooks } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPopularBooks())
  }, [])

  if (popularBooks.loading) {
    return <Loader color="blue" size="m" />
  }

  if (popularBooks.error) {
    return <div>Error</div>
  }

  return (
    <div className={style.root}>
      <h1>В топе по рейтингу</h1>
      <BookList books={popularBooks.data} />
    </div>
  )
}
