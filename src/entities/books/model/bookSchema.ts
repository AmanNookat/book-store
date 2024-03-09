import { z } from "zod"

// title: string
//   coverImg: Url
//   images?: Url[]
//   price: Som
//   publisher: string
//   year: number
//   pages: number
//   author: string
//   ageLimit: AgeLimit
//   category: BookCategory
//   rating?: number
//   description: string
//   sale?: number
//   quantity: number
//   id?: Id

export const bookSchema = z.object({
  title: z.string().min(3, {}),
})
