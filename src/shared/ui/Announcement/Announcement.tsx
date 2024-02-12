import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const Announcement: FC<Props> = ({ children }) => {
  return <div className="">{children}</div>
}
