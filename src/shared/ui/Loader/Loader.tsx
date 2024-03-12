import style from "./Loader.module.scss"
import cn from "classnames"

export const Loader = ({
  color,
  size,
}: {
  color: "white" | "blue"
  size: "l" | "m" | "s"
}) => {
  if (color === "blue") {
    return (
      <div className={style.root}>
        <img
          src="/images/loader-blue.svg"
          alt="loader"
          className={cn(style[`size_${size}`])}
        />
      </div>
    )
  } else {
    return (
      <div className={style.root}>
        <img
          src="/images/loader-white.svg"
          alt="loader"
          className={cn(style[`size_${size}`])}
        />
      </div>
    )
  }
}
