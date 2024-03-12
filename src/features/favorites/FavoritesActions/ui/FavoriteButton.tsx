import { useEffect, useState, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { BookInFav } from "@/entities/favorites"
import { Button, Icon } from "@/shared/ui"
import { getAuth } from "@/shared/lib"
import { toggleBookFavorites } from "../.."

export const FavoriteButton = ({ book }: { book: BookInFav }) => {
  const { user } = useAppSelector((state) => state.users)
  const [isFavBook, setIsFavBook] = useState(false)
  const dispatch = useAppDispatch()

  const email = getAuth()

  const handleToggleFavorites = useCallback(() => {
    dispatch(toggleBookFavorites(book))
  }, [book])

  useEffect(() => {
    const isBookFav = user.data?.favorites.some(
      (favBook: BookInFav) => favBook.id === book.id
    )

    if (isFavBook !== isBookFav) {
      setIsFavBook(isBookFav!)
    }
  }, [user, book])

  return (
    <Button onClick={handleToggleFavorites}>
      {isFavBook ? <Icon type="favorites-full" /> : <Icon type="favorites" />}
    </Button>
  )
}
