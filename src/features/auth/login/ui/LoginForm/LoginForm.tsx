import { useForm } from "react-hook-form"
import { LoginFormSchema, loginFormSchema } from "../../model/loginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { useAppDispatch } from "@/shared/model/hooks"
import { loginThunk } from "../../model/login"
import { Link } from "react-router-dom"
import { Button, Input } from "@/shared/ui"

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
          <Button type="submit">Войти</Button>
        </div>
        <p>
          Нет аккаунта? <Link to="/sign-up">Создать</Link>
        </p>
      </div>
    </form>
  )
}
