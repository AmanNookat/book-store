import style from "./Announcement.module.scss"
import cn from "classnames"

interface Props {
  children: React.ReactNode
}

export const Announcement: React.FC<Props> = ({ children }) => {
  return <div className={cn(style.root, "text-sm")}>{children}</div>
}
