import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { useAppDispatch } from "@/shared/model"
import { Link } from "react-router-dom"
import { Button, Input } from "@/shared/ui"
import { LoginFormSchema, loginFormSchema, loginThunk } from "../.."
import style from "./LoginForm.module.scss"
import cn from "classnames"

interface Props {
  onComplete?: () => void
}

export const LoginForm: React.FC<Props> = ({ onComplete }) => {
  const dispatch = useAppDispatch()
  const {
    setError,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmitHandler = useCallback(
    ({ email, password }: LoginFormSchema) => {
      dispatch(loginThunk({ email, password }))
        .unwrap()
        .then(() => {
          onComplete?.()
          reset()
        })
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
      <h1>Войти</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={style.form_input}>
          <label>Email</label>
          <Input
            type="email"
            placeholder="Введите email"
            variant="outline"
            register={register("email")}
          />
          <p className="text-sm">{errors.email?.message}</p>
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
          Войти
        </Button>
        <p className={style.tip}>
          Нет аккаунта? <Link to="/sign-up">Создать</Link>
        </p>
      </form>
    </div>
  )
}
