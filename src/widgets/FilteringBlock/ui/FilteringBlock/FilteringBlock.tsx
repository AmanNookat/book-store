import { CategorySort } from "@/features/books/filterBy/ui/CategorySort/CategorySort"
import { ClearFilter } from "@/features/books/filterBy/ui/ClearFilters/ClearFilter"
import { PriceRange } from "@/features/books/filterBy/ui/PriceRange/PriceRange"
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
