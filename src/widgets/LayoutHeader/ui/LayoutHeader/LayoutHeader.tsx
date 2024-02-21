import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"

export const LayoutHeader = () => {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#26a9e0",
        position: "sticky",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: 1300,
          margin: "0 auto",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <button>Каталог</button>
        <div>
          <input type="text" placeholder="Поиск" />
          <button>Найти</button>
        </div>
        <ul style={{ display: "flex", gap: 10, listStyle: "none" }}>
          <li>
            <Link to="/sign-in">Войти</Link>
          </li>
          <li>Заказы</li>
          <li>Избранные</li>
          <li>Корзина</li>
        </ul>
      </div>
    </div>
  )
}
