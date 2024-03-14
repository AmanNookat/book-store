import { Pagination, getBooks } from "@/entities/books"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { BookList } from "@/widgets/BookList"
import { FilteringBlock } from "@/widgets/FilteringBlock"
import { useEffect } from "react"

export const CatalogPage = () => {
  const { books } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  return (
    <>
      <FilteringBlock />
      <Pagination />
      <BookList books={books.data} />
    </>
  )
}
