import { useModal } from "@ebay/nice-modal-react"
import { useEffect } from "react"
import style from "./Modal.module.scss"
import { Icon } from "../.."

interface Props {
  children: React.ReactNode
}

const MODAL_OPENED_CLASS = "modalIsOpened"

export const Modal: React.FC<Props> = ({ children }) => {
  const modal = useModal()
  const onEscapeKeyClick = () => modal.remove()

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onEscapeKeyClick()
      }
    })
    document.body.classList.add(MODAL_OPENED_CLASS)

    return () => {
      document.removeEventListener("keydown", onEscapeKeyClick)
      document.body.classList.remove(MODAL_OPENED_CLASS)
    }
  }, [])

  return (
    <div className={style.root}>
      <div onClick={() => modal.remove()} className={style.overlay}></div>
      <div className={style.modal}>
        <Icon type="cross" className={style.x} onClick={() => modal.remove()} />
        {children}
      </div>
    </div>
  )
}
