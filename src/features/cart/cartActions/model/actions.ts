import { Cart, CartBookItem, CartBookObj } from "@/entities/cart"
import { NOTIFY_TYPES, getAuth, notify } from "@/shared/lib"

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

export const cartBooksCount = () => {
  const cart = getCartData()
  return cart.books.reduce((acc: number, curr: CartBookObj) => {
    return acc + curr.count
  }, 0)
}

export const checkBookInCart = (bookId: number) => {
  const cart = getCartData()
  return cart.books.find((book: CartBookObj) => book.bookItem.id === bookId)
}

export const countCartTotalCost = (cartBooks: CartBookObj[]) =>
  cartBooks.reduce((acc: number, currVal: CartBookObj) => {
    return acc + currVal.totalPrice
  }, 0)

export const addBookToCart = (bookObj: CartBookItem) => {
  const cart = getCartData()

  cart.books.push({
    count: 1,
    totalPrice: +bookObj.price,
    bookItem: bookObj,
  })
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
