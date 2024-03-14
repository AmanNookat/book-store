import { changePage } from "@/features/books"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { getBooks } from "../.."
import { useEffect, useState } from "react"
import style from "./Pagination.module.scss"
import cn from "classnames"

export const Pagination = () => {
  const { currentPage, totalPages } = useAppSelector((state) => state.books)
  const [pagesArr, setPagesArr] = useState<number[]>([])
  const dispatch = useAppDispatch()

  const handleChange = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement
    const pageNumber = parseInt(target.innerText)

    dispatch(changePage({ page: pageNumber }))
    dispatch(getBooks())
  }

  useEffect(() => {
    let arr = []
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i)
    }
    setPagesArr(arr)
  }, [totalPages])

  return (
    <div className={style.root}>
      {pagesArr.map((page) => (
        <span
          className={cn(
            page === currentPage ? `${style.current}` : "",
            "text-bold"
          )}
          key={page}
          onClick={handleChange}
        >
          {page}
        </span>
      ))}
    </div>
  )
}
