import { BookInFav } from "@/entities/favorites"
import { getUser } from "@/features/users/users/api/usersApi"
import { API_ENDPOINTS } from "@/shared/api"
import { instance } from "@/shared/api/instance"
import { getAuth } from "@/shared/lib/auth"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const toggleBookFavorites = createAsyncThunk(
  "toggleBookFavorites",
  async (book: BookInFav, { dispatch, getState }) => {
    await dispatch(getUser(getAuth()!))
    const user = JSON.parse(
      JSON.stringify((getState() as RootState).users.user.data)
    )
    const isFav = user?.favorites.some(
      (oneBook: BookInFav) => oneBook.id === book.id
    )
    isFav
      ? (user!.favorites = user!.favorites.filter(
          (oneBook: BookInFav) => oneBook.id !== book.id
        ))
      : user!.favorites.push(book)
    await instance.patch(`${API_ENDPOINTS.USERS}/${user?.id}`, user)
    return user
  }
)
