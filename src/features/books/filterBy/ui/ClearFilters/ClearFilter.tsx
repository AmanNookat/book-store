import { getBooks } from "@/entities/books/api/bookApi"
import { clearAllFilters } from "@/features/books/model/slice"
import { useAppDispatch } from "@/shared/model"
import { Button } from "@/shared/ui"

export const ClearFilter = () => {
  const dispatch = useAppDispatch()

  return (
    <Button
      onClick={() => {
        dispatch(clearAllFilters())
        dispatch(getBooks())
      }}
      theme="primary"
    >
      Очистить фильтры
    </Button>
  )
}
