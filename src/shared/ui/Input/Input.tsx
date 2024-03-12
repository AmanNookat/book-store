import cn from "classnames"
import style from "./Input.module.scss"

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string
  register?: any
  type?: string
  value?: string | number
  variant?: "primary" | "outline"
}

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  variant,
  value,
  register,
  ...props
}) => {
  return (
    <input
      className={cn(style.root, "text-base")}
      type={type}
      value={value}
      placeholder={placeholder}
      {...register}
      {...props}
    />
  )
}
