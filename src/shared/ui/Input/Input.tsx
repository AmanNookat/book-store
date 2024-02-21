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
    <input type={type} placeholder={placeholder} {...register} {...props} />
  )
}
