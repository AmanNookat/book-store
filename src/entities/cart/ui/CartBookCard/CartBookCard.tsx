import React from "react"
import { CartBookItem } from "../.."
import style from "./CartBookCard.module.scss"

interface Props {
  cartBook: CartBookItem
}

export const CartBookCard: React.FC<Props> = ({ cartBook }) => {
  return (
    <div className={style.root}>
      <img src={cartBook.coverImg} alt="cover" />
      <div>
        <h3>{cartBook.title}</h3>
        <p>{cartBook.author}</p>
      </div>
    </div>
  )
}
