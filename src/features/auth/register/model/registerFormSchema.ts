import { z } from "zod"

export const registerFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Заполните поле",
    })
    .email({
      message: "Неправильный формат email",
    }),
  password: z.string().min(8, {
    message: "Пароль должен содержать не меньше 8 символов",
  }),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
