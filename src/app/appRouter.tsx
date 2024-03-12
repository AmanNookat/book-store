import { Navigate, createBrowserRouter } from "react-router-dom"
import { baseLayout } from "./layouts/baseLayout"
import { MainPage } from "@/pages/main"
import { SignInPage, SignUpPage } from "@/pages/auth"
import { FavoritesPage } from "@/pages/favorites"
import { CartPage } from "@/pages/cart"
import { ErrorPage } from "@/pages/error"
import { ProfilePage } from "@/pages/profile"
import { BookPage, CatalogPage } from "@/pages/books"
import { OrdersPage } from "@/pages/orders"
import { getAuth } from "@/shared/lib/auth"

interface GuardProps {
  children: React.ReactElement
}

const GuestGuard: React.FC<GuardProps> = ({ children }) => {
  const isAuth = getAuth()

  if (!isAuth) return <Navigate to="/sign-in" />

  return children
}

const AuthGuard: React.FC<GuardProps> = ({ children }) => {
  const isAuth = getAuth()

  if (isAuth) return <Navigate to="/" />

  return children
}

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/sign-in",
        element: (
          <AuthGuard>
            <SignInPage />
          </AuthGuard>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <AuthGuard>
            <SignUpPage />
          </AuthGuard>
        ),
      },
      {
        path: "/user",
        children: [
          {
            path: "profile",
            element: (
              <GuestGuard>
                <ProfilePage />
              </GuestGuard>
            ),
          },
          {
            path: "favorites",
            element: (
              <GuestGuard>
                <FavoritesPage />
              </GuestGuard>
            ),
          },
          {
            path: "cart",
            element: (
              <GuestGuard>
                <CartPage />
              </GuestGuard>
            ),
          },
          {
            path: "orders",
            element: (
              <GuestGuard>
                <OrdersPage />
              </GuestGuard>
            ),
          },
        ],
      },
      {
        path: "/book/:bookId",
        element: <BookPage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])
