export interface CartBookObj {
  totalPrice: Som
  count: number
  bookItem: CartBookItem
}

export interface CartBookItem {
  title: string
  coverImage: Url
  price: Som
  author: string
  id: number
}

export interface Cart {
  user: string
  totalPrice: Som
  books: CartBookObj[]
}
