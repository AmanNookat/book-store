import cn from "classnames"
import style from "./Button.module.scss"

type ButtonTheme = "primary" | "secondary"

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  theme?: ButtonTheme
  size?: "m" | "s"
  type?: "submit"
  isLoading?: boolean
  disabled?: boolean
}

export const Button: React.FC<Props> = ({
  onClick,
  children,
  disabled,
  isLoading,
  size,
  type,
}) => {
  return (
    <button
      className={cn(
        style.root,
        style[`root_size_${size}`],
        disabled && style.root_disabled
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <div>Loading</div> : children}
    </button>
  )
}
