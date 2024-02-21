import { useAppDispatch } from "@/shared/model/hooks"
import { useForm } from "react-hook-form"
import {
  RegisterFormSchema,
  registerFormSchema,
} from "../../model/registerFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { registerThunk } from "../../model/register"
import { Link } from "react-router-dom"
import { Button, Input } from "@/shared/ui"

export const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const {
    setError,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  const onSubmitHandler = useCallback(
    ({ email, password }: RegisterFormSchema) => {
      dispatch(
        registerThunk({
          email,
          password,
        })
      )
        .unwrap()
        .then(() => reset())
        .catch((err) =>
          setError("email", {
            type: "server",
            message: err.message,
          })
        )
    },
    []
  )

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <div>
          <label>Email</label>
        </div>
        <Input
          type="email"
          placeholder="Введите email"
          variant="outline"
          register={register("email")}
        />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <div>
          <label>Password</label>
        </div>
        <Input
          type="password"
          placeholder="Введите пароль"
          variant="outline"
          register={register("password")}
        />
        {errors.password && (
          <p className="text-xs">{errors.password?.message}</p>
        )}
        <div>
          <Button type="submit">Зарегистрироваться</Button>
        </div>
        <p>
          Уже есть аккаунт? <Link to="/sign-in">Войти</Link>
        </p>
      </div>
    </form>
  )
}
