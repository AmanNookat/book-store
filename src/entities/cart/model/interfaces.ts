export interface CartBookObj {
  totalPrice: Som
  count: number
  bookItem: CartBookItem
}

export interface CartBookItem {
  title: string
  coverImg: Url
  price: Som
  author: string
  id: number
}

export interface Cart {
  user: string
  totalCost: Som
  books: CartBookObj[]
}
