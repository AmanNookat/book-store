import { getOneBook } from "@/entities/books/api/bookApi"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Loader } from "@/shared/ui/Loader/Loader"
import { BookDetails } from "@/widgets/BookDetails"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const BookPage = () => {
  const { bookId } = useParams<string>()
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector((state) => state.books.book)

  useEffect(() => {
    dispatch(getOneBook(+bookId!))
  }, [])

  return loading ? (
    <Loader color="blue" size="l" />
  ) : error ? (
    <div>Error</div>
  ) : (
    <div>
      <BookDetails book={data!} />
    </div>
  )
}
