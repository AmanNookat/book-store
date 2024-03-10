import { Link } from "react-router-dom"
import { Button, Icon, Input } from "@/shared/ui"
import { Logo } from "../.."
import { navbarLinks } from "@/shared/lib"
import { getAuth } from "@/shared/lib/auth"
import style from "./LayoutHeader.module.scss"

export const LayoutHeader = () => {
  const isAuth = getAuth()
  return (
    <div className={style.root}>
      <div className={style.root_inner}>
        <Logo />
        <Button theme="primary">
          <Icon type="catalog" />
          Каталог
        </Button>
        <div className={style.root_input}>
          <Input placeholder="Хочу найти" />
          <Button theme="primary">
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
