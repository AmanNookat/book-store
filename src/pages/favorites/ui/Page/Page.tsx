import { getUser } from "@/features/users/users/api/usersApi"
import { getAuth } from "@/shared/lib/auth"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { useEffect } from "react"

export const FavoritesPage = () => {
  const { data, loading, error } = useAppSelector((state) => state.users.user)
  const dispatch = useAppDispatch()
  const email = getAuth()

  useEffect(() => {
    email && dispatch(getUser(email))
  }, [])

  return (
    <div>
      {data?.favorites.map((elem) => (
        <div>{elem.title}</div>
      ))}
    </div>
  )
}
