import cn from "classnames"
import style from "./Input.module.scss"

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string
  register?: any
  type?: string
  variant?: "primary" | "outline"
}

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  variant,
  register,
  ...props
}) => {
  return (
    <input
      className={cn(style.root, "text-base")}
      type={type}
      placeholder={placeholder}
      {...register}
      {...props}
    />
  )
}
