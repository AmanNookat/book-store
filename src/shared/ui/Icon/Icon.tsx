import cn from "classnames"
import style from "./Icon.module.scss"

export type IconType =
  | "bag"
  | "like"
  | "liked"
  | "user"
  | "loader"
  | "cross"
  | "chevronDown"
  | "toggleRight"
  | "trash"
  | "catalog"
  | "search"
  | "orders"
  | "favorites"
  | "cart"
  | "bookmark"

interface Props {
  className?: string
  type: IconType
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Icon: React.FC<Props> = ({ className, type, onClick }) => {
  return (
    <div
      className={cn(
        style.root,
        {
          [style.root_clickable]: Boolean(onClick),
        },
        className
      )}
      onClick={onClick}
    >
      <img src={`/images/${type}.svg`} alt={type} className={style.icon} />
    </div>
  )
}
