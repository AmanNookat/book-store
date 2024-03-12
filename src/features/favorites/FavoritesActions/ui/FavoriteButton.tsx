import { useEffect, useState, useCallback, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { toggleBookFavorites } from "../model/toggleFavorites"
import { BookInFav } from "@/entities/favorites"
import { getAuth } from "@/shared/lib/auth"
import { getUser } from "@/features/users/users/api/usersApi"
import { Button, Icon } from "@/shared/ui"

export const FavoriteButton = ({ book }: { book: BookInFav }) => {
  const { user } = useAppSelector((state) => state.users)
  const [isFavBook, setIsFavBook] = useState(false)
  const dispatch = useAppDispatch()

  const email = getAuth()

  const handleToggleFavorites = useCallback(() => {
    dispatch(toggleBookFavorites(book))
  }, [dispatch, book])

  useEffect(() => {
    if (email) {
      dispatch(getUser(email))
    }
  }, [email])

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
