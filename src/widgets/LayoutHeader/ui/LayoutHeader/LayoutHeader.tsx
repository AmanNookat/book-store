import { Link } from "react-router-dom"
import { Button, Icon, Input } from "@/shared/ui"
import { Logo } from "../.."
import style from "./LayoutHeader.module.scss"
import { navbarLinks } from "@/shared/lib"

export const LayoutHeader = () => {
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
          {navbarLinks.map((item) => (
            <Link to={item.url}>
              <Icon type={item.iconName} />
              <p className="text-sm">{item.text}</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
