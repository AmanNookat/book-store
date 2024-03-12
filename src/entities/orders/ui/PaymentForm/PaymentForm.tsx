// import { NOTIFY_TYPES, notify } from "@/shared/lib"
// import { useAppDispatch } from "@/shared/model"
// import { useState } from "react"
// import "react-credit-cards-2/dist/es/styles-compiled.css"
// import { createOrder } from "../../api/ordersApi"

// export const PaymentForm = () => {
//   const [state, setState] = useState({
//     number: "",
//     expiry: "",
//     cvc: "",
//     name: "",
//     focus: "",
//   })
//   const dispatch = useAppDispatch()

//   const handleInputChange = (evt: any) => {
//     const { name, value } = evt.target

//     let newValue = value
//     if (name === "number" || name === "cvc") {
//       newValue = value.replace(/\D/g, "")
//     }

//     if (name === "expiry") {
//       newValue = value.replace(/\D/g, "").slice(0, 4)
//     }

//     setState((prev) => ({ ...prev, [name]: newValue }))
//   }

//   const handleInputFocus = (evt: any) => {
//     setState((prev) => ({ ...prev, focus: evt.target.name }))
//   }

//   const handleClick = () => {
//     if (
//       !state.number.trim() ||
//       !state.name.trim() ||
//       !state.expiry.trim() ||
//       !state.cvc.trim()
//     ) {
//       return notify("Заполните поля", NOTIFY_TYPES.warning)
//     }

//     if (
//       state.number.length != 16 ||
//       state.expiry.length != 4 ||
//       state.cvc.length != 3
//     ) {
//       return notify("Правильно заполните все поля", NOTIFY_TYPES.error)
//     }

//     dispatch(createOrder({ userCardData: state }))
//   }

//   return <div>Payment</div>
// }
