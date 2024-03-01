import { Link } from "react-router-dom"
import style from "./Logo.module.scss"
import cn from "classnames"

export const Logo = () => {
  return (
    <Link to="/" className={cn(style.root, "text-2xl", "text-bold")}>
      <div>📚</div>
      <p>Readonly</p>
    </Link>
  )
}
