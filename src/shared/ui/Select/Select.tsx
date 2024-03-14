import { ChangeEvent } from "react"
import style from "./Select.module.scss"

interface Props {
  options: string[]
  title?: string
  register?: any
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
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
    <select
      className={style.root}
      {...register}
      {...props}
      value={value}
      onChange={onChange}
    >
      {options?.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  )
}
