import { Cart, CartBookItem, CartBookObj } from "@/entities/cart"
import { NOTIFY_TYPES, notify } from "@/shared/lib"
import { getAuth } from "@/shared/lib/auth"

export const getCartData = () => {
  const cartCheck = localStorage.getItem("Rcart")
  if (cartCheck) {
    const cart = JSON.parse(cartCheck)
    return cart
  } else {
    return {
      user: "",
      totalCost: 0,
      books: [],
    }
  }
}

export const setCartData = (cart: Cart) => {
  const userEmail = getAuth()
  cart.user = userEmail!
  localStorage.setItem("Rcart", JSON.stringify(cart))
}

export const checkBookInCart = (bookId: number) => {
  const cart = getCartData()
  return cart.books.find((book: CartBookObj) => book.bookItem.id === bookId)
}

export const countCartTotalCost = (cartBooks: CartBookObj[]) =>
  cartBooks.reduce((acc: number, currVal: CartBookObj) => {
    return acc + currVal.totalPrice
  }, 0)

export const toggleBookToCart = (bookObj: CartBookItem) => {
  console.log("a")
  const cart = getCartData()

  if (checkBookInCart(bookObj.id)) {
    cart.books = cart.books.filter(
      (book: CartBookObj) => book.bookItem.id !== bookObj.id
    )
  } else {
    cart.books.push({
      count: 1,
      totalPrice: +bookObj.price,
      bookItem: bookObj,
    })
  }
  cart.totalCost = countCartTotalCost(cart.books)
  setCartData(cart)
}

export const changeCountBooksInCart = (bookId: number, count: number) => {
  if (count < 0)
    return notify("Число не может быть отрицательным", NOTIFY_TYPES.error)
  const cart = getCartData()
  cart.books = cart.books.map((book: CartBookObj) => {
    if (book.bookItem.id === bookId) {
      book.count = count
      book.totalPrice = book.bookItem.price * count
    }
    return book
  })
  cart.totalCost = countCartTotalCost(cart.books)
  setCartData(cart)
}

export const deleteBookFromCart = (bookId: number) => {
  const cart = getCartData()
  cart.books = cart.books.filter(
    (book: CartBookObj) => book.bookItem.id !== bookId
  )
  cart.totalCost = countCartTotalCost(cart.books)
  setCartData(cart)
}

export const cleanCart = () => {
  localStorage.removeItem("Rcart")
}

// export const createOrder = createAsyncThunk(
//   "cart/createOrder",
//   async ({ userCardData }) => {
//     const cart = getCartData()
//     const order = { ...cart, cardData: userCardData }
//     if (!cart.cards.length) return
//     await axios.post(ORDERS_API, order)
//     notify("Заказ отправлен на рассмотрение")
//     cleanCart()
//   }
// )
