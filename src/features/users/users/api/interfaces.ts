import { BookInFav } from "@/entities/favorites"

export interface User {
  email: string
  password: string
  isAdmin: boolean
  nickname: string
  image: Url
  age: number
  about: string
  favorites: BookInFav[]
  id?: number
}
