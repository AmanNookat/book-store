import { type BookSortBy } from "./types"

export const bookSortByNamesMap: Record<BookSortBy, string> = {
  Featured: "Featured",
  Newest: "Newest",
  PriceHighLow: "Price: High-Low",
  PriceLowHigh: "Price: Low-High",
} as const
