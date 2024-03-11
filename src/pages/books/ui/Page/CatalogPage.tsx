import { getBooks } from "@/entities/books/api/bookApi"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { BookList } from "@/widgets/BookList"
import { FilteringBlock } from "@/widgets/FilteringBlock/ui/FilteringBlock/FilteringBlock"
import { useEffect } from "react"

export const CatalogPage = () => {
  const { books } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getBooks())
  }, [])

  return (
    <div>
      <FilteringBlock />
      <BookList books={books.data} />
    </div>
  )
}
