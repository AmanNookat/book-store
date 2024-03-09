import { RegisterForm } from "@/features/users/register"
import style from "./SignUpPage.module.scss"

export const SignUpPage = () => {
  return (
    <div className={style.root}>
      <img src="/images/sign-up.png" alt="" />
      <RegisterForm />
    </div>
  )
}
