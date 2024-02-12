import { NavigateFunction } from "react-router-dom"

export const logout = (navigate: NavigateFunction) => {
  localStorage.removeItem("readonly")
  navigate("/sign-in")
  window.location.reload()
}
