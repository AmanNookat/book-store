import {
  CategorySort,
  ClearFilter,
  PriceRange,
} from "@/features/books/filterBy"
import style from "./FilteringBlock.module.scss"

export const FilteringBlock = () => {
  return (
    <div className={style.root}>
      <CategorySort />
      <div className={style.inner}>
        <PriceRange />
        <ClearFilter />
      </div>
    </div>
  )
}
