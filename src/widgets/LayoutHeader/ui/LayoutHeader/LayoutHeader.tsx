import { Link, useNavigate } from "react-router-dom"
import { Button, Icon, Input } from "@/shared/ui"
import { Logo } from "../.."
import { navbarLinks } from "@/shared/lib"
import { getAuth } from "@/shared/lib/auth"
import style from "./LayoutHeader.module.scss"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { ChangeEvent, useState } from "react"
import { setSearchVal } from "@/features/books/model/slice"
import { getBooks } from "@/entities/books/api/bookApi"
import { debounce } from "@/shared/lib/debounce"

export const LayoutHeader = () => {
  const { search } = useAppSelector((state) => state.books)
  const [searchValue, setSearchValue] = useState(search)
  const isAuth = getAuth()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const debouncedInput = debounce((value: string) => {
    setSearchValue(value)
  })

  return (
    <div className={style.root}>
      <div className={style.root_inner}>
        <Logo />
        <Button theme="primary" onClick={() => navigate("/catalog")}>
          <Icon type="catalog" />
          Каталог
        </Button>
        <div className={style.root_input}>
          <Input
            placeholder="Хочу найти"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              debouncedInput(e.target.value)
            }
          />
          <Button
            theme="primary"
            onClick={() => {
              dispatch(setSearchVal({ search: searchValue }))
              dispatch(getBooks())
              navigate("/catalog")
            }}
          >
            <Icon type="search" />
          </Button>
        </div>
        <ul className={style.root_links}>
          <Link to={isAuth ? "/user/profile" : "/sign-in"}>
            <Icon type="user"></Icon>
            <p className="text-sm">{isAuth ? "Профиль" : "Войти"}</p>
          </Link>
          {navbarLinks.map((item) => (
            <Link to={item.url} key={item.url}>
              <Icon type={item.iconName} />
              <p className="text-sm">{item.text}</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
