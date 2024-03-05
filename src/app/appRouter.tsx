import { Navigate, createBrowserRouter } from "react-router-dom"
import { baseLayout } from "./layouts/baseLayout"
import { MainPage } from "@/pages/main"
import { SignInPage, SignUpPage } from "@/pages/auth"
import { FavoritesPage } from "@/pages/favorites"
import { CartPage } from "@/pages/cart"
import { BookPage } from "@/pages/books"
import { ErrorPage } from "@/pages/error"
import { ProfilePage } from "@/pages/profile"

interface GuardProps {
  children: React.ReactElement
}

const GuestGuard: React.FC<GuardProps> = ({ children }) => {
  // const isAuth = localStorage.getItem("readonly")

  // if (!isAuth) return <Navigate to="/sign-in" />

  return children
}

const AuthGuard: React.FC<GuardProps> = ({ children }) => {
  // const isAuth = localStorage.getItem("readonly")

  // if (isAuth) return <Navigate to="/" />

  return children
}

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    // errorElement: <ErrorPage />,
    // loader:
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
        path: "/user/profile",
        element: (
          <GuestGuard>
            <ProfilePage />
          </GuestGuard>
        ),
      },
      {
        path: "/user/favorites",
        element: (
          <GuestGuard>
            <FavoritesPage />
          </GuestGuard>
        ),
      },
      {
        path: "/user/cart",
        element: (
          <GuestGuard>
            <CartPage />
          </GuestGuard>
        ),
      },
      {
        path: "/book/:bookId",
        element: <BookPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])
