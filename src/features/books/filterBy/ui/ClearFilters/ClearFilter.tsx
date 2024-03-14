import { getBooks } from "@/entities/books"
import { clearAllFilters } from "@/features/books"
import { useAppDispatch } from "@/shared/model"
import { Button } from "@/shared/ui"

export const ClearFilter = () => {
  const dispatch = useAppDispatch()

  const handleClickClear = () => {
    dispatch(clearAllFilters())
    dispatch(getBooks())
  }

  return (
    <Button onClick={handleClickClear} theme="primary">
      Очистить фильтры
    </Button>
  )
}
