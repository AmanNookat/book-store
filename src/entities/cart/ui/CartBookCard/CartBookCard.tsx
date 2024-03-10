import React from "react"
import { CartBookItem } from "../.."

interface Props {
  cartBook: CartBookItem
}

export const CartBookCard: React.FC<Props> = ({ cartBook }) => {
  return <div>{cartBook.title}</div>
}
