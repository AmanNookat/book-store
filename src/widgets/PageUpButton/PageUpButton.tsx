// import { getPopularBooks } from "@/entities/books/api/bookApi"
// import { useAppDispatch, useAppSelector } from "@/shared/model/hooks"

// export const PageUpButton = () => {
//   const { data: popularBooks } = useAppSelector(
//     (state) => state.books.popularBooks
//   )
//   const dispatch = useAppDispatch()

//   console.log(popularBooks)

//   return (
//     <button
//       className=""
//       onClick={() => {
//         dispatch(getPopularBooks())
//       }}
//     >
//       TEST
//     </button>
//   )
// }

export const PageUpButton = () => {
  return <button>UP</button>
}
