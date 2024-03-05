import { getPopularBooks } from "@/entities/books/api/bookApi"
import { BookList } from "@/widgets/BookList"
import { useEffect } from "react"
import style from "./PopularBooks.module.scss"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { getUserProfile } from "@/entities/users/api/usersApi"

export const PopularBookList = () => {
  const { popularBooks } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPopularBooks())
  }, [])

  return (
    <div className={style.root}>
      <h1>В топе по рейтингу</h1>
      <BookList books={popularBooks.data} />
    </div>
  )
}
