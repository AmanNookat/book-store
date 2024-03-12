export interface User {
  email: string
  password: string
  isAdmin: boolean
  nickname: string
  image: Url
  age: number
  about: string
  id?: number
}
