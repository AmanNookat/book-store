import { useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const SignInPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onComplete = useCallback(() => {
    navigate(location.state?.returnUrl ?? "/")
  }, [navigate])

  return (
    <div>
      <h1>Sign In</h1>
      {/* <SignInForm onComplete={onComplete} /> */}
    </div>
  )
}
