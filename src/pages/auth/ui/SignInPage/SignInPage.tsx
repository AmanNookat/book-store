import { LoginForm } from "@/features/auth/login"
import { useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import style from "./SignInPage.module.scss"

export const SignInPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onComplete = useCallback(() => {
    navigate(location.state?.returnUrl ?? "/")
    window.location.reload()
  }, [navigate])

  return (
    <div className={style.root}>
      <LoginForm onComplete={onComplete} />
      <img src="/images/sign-in.png" alt="" />
    </div>
  )
}
