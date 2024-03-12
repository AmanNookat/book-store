import { z } from "zod"

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(3, {
      message: "Заполните поле email",
    })
    .email({
      message: "Неправильный формат email",
    }),
  password: z.string().min(8, {
    message: "Не меньше 8 символов",
  }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
