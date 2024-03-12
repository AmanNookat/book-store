import { useForm } from "react-hook-form"
import { useAppDispatch } from "@/shared/model"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { Link } from "react-router-dom"
import { Button, Input } from "@/shared/ui"
import { RegisterFormSchema, registerFormSchema, registerThunk } from "../.."
import style from "./RegisterForm.module.scss"
import cn from "classnames"

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
    <div className={cn(style.root, "shadow")}>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={style.form_input}>
          <label>Email</label>
          <Input
            type="email"
            placeholder="Введите email"
            variant="outline"
            register={register("email")}
          />
          <p className="text-sm"> {errors.email?.message}</p>
        </div>
        <div className={style.form_input}>
          <label>Пароль</label>
          <Input
            type="password"
            placeholder="Введите пароль"
            variant="outline"
            register={register("password")}
          />
          {errors.password && (
            <p className="text-sm">{errors.password?.message}</p>
          )}
        </div>
        <Button type="submit" className="text-bold">
          Зарегистрироваться
        </Button>
        <p className={style.tip}>
          Уже есть аккаунт? <Link to="/sign-in">Войти</Link>
        </p>
      </form>
    </div>
  )
}
