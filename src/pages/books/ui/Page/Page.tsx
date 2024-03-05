import { getOneBook } from "@/entities/books/api/bookApi"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { BookDetails } from "@/widgets/BookDetails"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const BookPage = () => {
  const { bookId } = useParams<string>()
  const dispatch = useAppDispatch()
  // const navigate = useNavigate()

  const { data, loading, error } = useAppSelector((state) => state.books.book)

  useEffect(() => {
    dispatch(getOneBook(+bookId!))
  }, [])

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div>
      <BookDetails book={data!} />
    </div>
  )
}
