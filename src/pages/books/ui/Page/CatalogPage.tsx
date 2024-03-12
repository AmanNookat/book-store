import { getBooks } from "@/entities/books/api/bookApi"
import { Pagination } from "@/entities/books/ui/Pagination/Pagination"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Loader } from "@/shared/ui/Loader/Loader"
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
    <>
      <FilteringBlock />
      <Pagination />
      <BookList books={books.data} />
    </>
  )
}
