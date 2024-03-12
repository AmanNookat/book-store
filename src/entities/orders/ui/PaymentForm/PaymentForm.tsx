import { NOTIFY_TYPES, notify } from "@/shared/lib"
import { useAppDispatch } from "@/shared/model"
import { useState } from "react"
import Cards from "react-credit-cards-2"
import "react-credit-cards-2/dist/es/styles-compiled.css"
import { createOrder } from "../../api/ordersApi"
import { Modal } from "@/shared/ui"

export const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  })
  const dispatch = useAppDispatch()

  const handleInputChange = (evt: any) => {
    const { name, value } = evt.target

    let newValue = value
    if (name === "number" || name === "cvc") {
      newValue = value.replace(/\D/g, "")
    }

    if (name === "expiry") {
      newValue = value.replace(/\D/g, "").slice(0, 4)
    }

    setState((prev) => ({ ...prev, [name]: newValue }))
  }

  const handleInputFocus = (evt: any) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }))
  }

  const handleClick = () => {
    if (
      !state.number.trim() ||
      !state.name.trim() ||
      !state.expiry.trim() ||
      !state.cvc.trim()
    ) {
      return notify("Заполните поля", NOTIFY_TYPES.warning)
    }

    if (
      state.number.length != 16 ||
      state.expiry.length != 4 ||
      state.cvc.length != 3
    ) {
      return notify("Правильно заполните все поля", NOTIFY_TYPES.error)
    }

    dispatch(createOrder({ userCardData: state }))
  }

  return (
    <div>Payment</div>
    // <Modal>
    //   <h1 style={{ fontSize: "25px", textAlign: "center", marginTop: "25px" }}>
    //     1000両 = 1$
    //   </h1>
    //   <div>
    //     <Cards
    //       number={state.number}
    //       expiry={state.expiry}
    //       cvc={state.cvc}
    //       name={state.name}
    //       // @ts-ignore
    //       focused={state.focus}
    //     />
    //   </div>
    //   <div>
    //     <input
    //       type="text"
    //       name="number"
    //       placeholder="Номер карты"
    //       value={state.number}
    //       onChange={handleInputChange}
    //       onFocus={handleInputFocus}
    //       // @ts-ignore
    //       maxLength="16"
    //     />
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Имя владельца"
    //       value={state.name}
    //       onChange={handleInputChange}
    //       onFocus={handleInputFocus}
    //     />
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <input
    //         style={{ width: "42%" }}
    //         type="text"
    //         name="expiry"
    //         placeholder="Срок действия (мм/гг)"
    //         value={state.expiry}
    //         onChange={handleInputChange}
    //         onFocus={handleInputFocus}
    //         // @ts-ignore
    //         maxLength="4"
    //       />
    //       <input
    //         style={{ width: "42%" }}
    //         type="text"
    //         name="cvc"
    //         placeholder="CVC"
    //         value={state.cvc}
    //         onChange={handleInputChange}
    //         onFocus={handleInputFocus}
    //         // @ts-ignore
    //         maxLength="3"
    //       />
    //     </div>
    //   </div>
    //   <button
    //     onClick={() => {
    //       handleClick()
    //     }}
    //   >
    //     Заказать
    //   </button>
    // </Modal>
  )
}
