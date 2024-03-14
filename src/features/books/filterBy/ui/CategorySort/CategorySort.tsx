import { useAppDispatch, useAppSelector } from "@/shared/model"
import { useEffect, useState } from "react"
import { changeCategory } from "@/features/books"
import { getBooks } from "@/entities/books"
import { bookCategories } from "@/shared/lib"
import cn from "classnames"
import style from "./CategorySort.module.scss"

export const CategorySort = () => {
  const { currentCategory } = useAppSelector((state) => state.books)
  const [category, setCategory] = useState("все")
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeCategory({ category }))
    dispatch(getBooks())
  }, [])

  useEffect(() => {
    if (!currentCategory) {
      setCategory("все")
    }
  }, [currentCategory])

  const handleClickChangeCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    setCategory(target.innerText)
  }

  return (
    <div className={style.root}>
      {bookCategories.map((categoryText) => (
        <div
          onClick={handleClickChangeCategory}
          key={categoryText}
          className={cn(
            style.category,
            categoryText === category && `${style.selected}`,
            "text-sm"
          )}
        >
          {categoryText}
        </div>
      ))}
    </div>
  )
}
