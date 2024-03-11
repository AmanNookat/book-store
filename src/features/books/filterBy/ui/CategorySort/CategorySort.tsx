import { getBooks } from "@/entities/books/api/bookApi"
import { changeCategory } from "@/features/books/model/slice"
import { bookCategories } from "@/shared/lib/constants/book-keys"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { useEffect, useState } from "react"
import cn from "classnames"
import style from "./CategorySort.module.scss"

export const CategorySort = () => {
  const { currentCategory } = useAppSelector((state) => state.books)
  const [category, setCategory] = useState("все")
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeCategory({ category }))
    dispatch(getBooks())
  }, [category])

  useEffect(() => {
    if (!currentCategory) {
      setCategory("все")
    }
  }, [currentCategory])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    setCategory(target.innerText)
  }

  return (
    <div className={style.root}>
      {bookCategories.map((categoryText) => (
        <div
          onClick={handleClick}
          key={categoryText}
          className={cn(
            style.category,
            "text-sm",
            categoryText === category && `${style.selected}`
          )}
        >
          {categoryText}
        </div>
      ))}
    </div>
  )
}
