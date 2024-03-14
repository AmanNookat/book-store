import { getOneBook } from "@/entities/books/api/bookApi"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Loader } from "@/shared/ui/Loader/Loader"
import { BookDetails } from "@/widgets/BookDetails"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const BookPage = () => {
  const { data, loading, error } = useAppSelector((state) => state.books.book)
  const { bookId } = useParams<string>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getOneBook(+bookId!))
  }, [])

  if (loading) {
    ;<Loader color="blue" size="l" />
  }

  if (error) {
    return <div>Error</div>
  }

  return <BookDetails book={data!} />
}
