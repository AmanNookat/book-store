interface Props {
  options: string[]
  title?: string
  register?: any
  onChange: any
  value?: string
}

export const Select: React.FC<Props> = ({
  options,
  title,
  register,
  value,
  onChange,
  ...props
}) => {
  return (
    <select {...register} {...props} value={value} onChange={onChange}>
      {options?.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  )
}
