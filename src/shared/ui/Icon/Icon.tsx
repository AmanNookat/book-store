import cn from "classnames"
import style from "./Icon.module.scss"

type IconType =
  | "bag"
  | "like"
  | "liked"
  | "user"
  | "loader"
  | "x"
  | "chevronDown"
  | "toggleRight"
  | "trash"

interface Props {
  className?: string
  type: IconType
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Icon: React.FC<Props> = (props) => {
  return (
    <div
      className={cn(
        style.root,
        {
          [style.root_clickable]: Boolean(props.onClick),
        },
        props.className
      )}
      onClick={props.onClick}
    >
      <div
        className={style.icon}
        style={{
          backgroundImage: `url("/images/${props.type}.svg")`,
        }}
      ></div>
    </div>
  )
}
