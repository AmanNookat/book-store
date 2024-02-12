import { getBooks } from "@/entities/books/api/bookApi"
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks"

export const PageUpButton = () => {
  const { books, error } = useAppSelector((state) => state.books)

  const dispatch = useAppDispatch()

  console.log(books)
  console.log(error)
  return (
    <button className="" onClick={() => dispatch(getBooks())}>
      UP
    </button>
  )
}
