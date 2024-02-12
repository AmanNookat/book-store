import { useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const SignUpPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onComplete = useCallback(() => {
    navigate(location.state?.returnUrl ?? "/")
  }, [navigate])

  return (
    <div>
      <h1>Sign Up</h1>
      {/* <SignUpForm onComplete={onComplete} /> */}
    </div>
  )
}
