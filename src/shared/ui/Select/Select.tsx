interface Props {
  options: string[]
  title: string
  register?: any
}

export const Select: React.FC<Props> = ({
  options,
  title,
  register,
  ...props
}) => {
  return (
    <select {...register} {...props}>
      {options?.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  )
}
