import style from "./Footer.module.scss"

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.footer_col}>
            <h4>Компания</h4>
            <ul>
              <li>
                <a>О нас</a>
              </li>
              <li>
                <a>Наши услуши</a>
              </li>
              <li>
                <a>Политика конфиденциальности</a>
              </li>
              <li>
                <a>Программа</a>
              </li>
            </ul>
          </div>
          <div className={style.footer_col}>
            <h4>Получить помощь</h4>
            <ul>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Обратная связь</a>
              </li>
              <li>
                <a>Отзывы</a>
              </li>
              <li>
                <a>Статусы</a>
              </li>
              <li>
                <a>Параметры оплаты</a>
              </li>
            </ul>
          </div>
          <div className={style.footer_col}>
            <h4>Онлайн магазин</h4>
            <ul>
              <li>
                <a>Просмотр</a>
              </li>
              <li>
                <a>Корзина</a>
              </li>
              <li>
                <a>Книги</a>
              </li>
              <li>
                <a>Комиксы</a>
              </li>
            </ul>
          </div>
          <div className={style.footer_col}>
            <h4>Следите за нами</h4>
            <div className={style.social_links}>
              <a>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a>
                <i className="fab fa-twitter"></i>
              </a>
              <a>
                <i className="fab fa-instagram"></i>
              </a>
              <a>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
