import { IconType } from "@/shared/ui"

interface NavLinks {
  text: string
  iconName: IconType
  url: string
}

export const navbarLinks: NavLinks[] = [
  { text: "Войти", iconName: "user", url: "/sign-in" },
  { text: "Заказы", iconName: "orders", url: "/orders" },
  { text: "Избранное", iconName: "favorites", url: "/favorites" },
  { text: "Корзина", iconName: "cart", url: "/cart" },
]
