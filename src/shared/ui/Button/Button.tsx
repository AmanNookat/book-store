import cn from "classnames"
import style from "./Button.module.scss"

type ButtonTheme = "primary" | "secondary"

interface Props {
  className?: string
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
  className,
  theme,
}) => {
  return (
    <button
      className={cn(
        style.root,
        style[`root_size_${size}`],
        style[`root_theme_${theme}`],
        className,
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
