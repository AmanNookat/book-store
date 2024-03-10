import React from "react"
import { CartBookItem, CartBookObj } from "../.."

interface Props {
  cartBook: CartBookItem
  key: number
}

export const CartBookCard: React.FC<Props> = ({ cartBook }) => {
  return <div>{cartBook.title}</div>
}
