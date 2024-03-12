export interface Book {
  title: string
  coverImg: Url
  images?: Url[]
  price: Som
  publisher: string
  year: number
  pages: number
  author: string
  ageLimit: AgeLimit
  category: BookCategory
  rating?: number
  description: string
  sale?: number
  quantity: number
  id?: Id
}

export interface BooksInitStateKey<T> {
  data: T
  loading: boolean
  error: boolean
}

export type BookCategory =
  | "Художественная литература"
  | "Комиксы"
  | "Манга"
  | "Филология"
  | "Образование"
  | "Эзотерика"
  | "Медицина"
  | "Красота и мода"
  | "Кулинария"
  | "Дом и хобби"
  | "Наука и техника"
  | "Религия"
  | "Психология"
  | "Искусство"
  | "Экономика"
  | "Исторические"
  | "Право"

export type AgeLimit = "0+" | "6+" | "12+" | "16+" | "18+"
