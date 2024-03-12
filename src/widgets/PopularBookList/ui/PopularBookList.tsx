import { BookList } from "@/widgets/BookList"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { getPopularBooks } from "@/entities/books"
import style from "./PopularBooks.module.scss"
import { Loader } from "@/shared/ui/Loader/Loader"

export const PopularBookList = () => {
  const { popularBooks } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPopularBooks())
  }, [])

  return popularBooks.loading ? (
    <Loader color="blue" size="m" />
  ) : popularBooks.error ? (
    <div>Error</div>
  ) : (
    <div className={style.root}>
      <h1>В топе по рейтингу</h1>
      <BookList books={popularBooks.data} />
    </div>
  )
}
