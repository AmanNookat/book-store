import { IconType } from "@/shared/ui"

interface NavLinks {
  text: string
  iconName: IconType
  url: string
}

export const navbarLinks: NavLinks[] = [
  { text: "Заказы", iconName: "orders", url: "/user/orders" },
  { text: "Закладки", iconName: "bookmark", url: "/user/favorites" },
  { text: "Корзина", iconName: "cart", url: "/user/cart" },
]
