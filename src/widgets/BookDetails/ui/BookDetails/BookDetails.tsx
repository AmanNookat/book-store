import { Book } from "@/entities/books"
import { Button, Icon } from "@/shared/ui"
import { Link } from "react-router-dom"
import style from "./BookDetails.module.scss"
import cn from "classnames"

interface Props {
  book: Book
}

export const BookDetails: React.FC<Props> = ({ book }) => {
  return (
    <div className={style.root}>
      <div className={style.left}>
        <div className={style.left_top}>
          <div className={style.img_block}>
            <img src={book?.coverImg} alt={book?.title} />
            <div>
              {book?.images!.map((elem, index) => {
                if (index < 3) {
                  return (
                    <img className={style.mapped_img} src={elem} key={index} />
                  )
                }
              })}
              {book?.images!.length > 3 && <div>еще...</div>}
            </div>
          </div>
          <div className={style.info_block}>
            <Link to="/" className={cn(style.category, "text-sm", "text-bold")}>
              {book?.category}
            </Link>
            <div className={style.rating_block}>
              <p>Рейтинг: {book?.rating}</p>
              <p>Оценить</p>
              <p>0 отзывов</p>
            </div>
            <h1>{book?.title}</h1>
            <div className={style.book_info}>
              <div className={style.book_keys}>
                <p>ID товара</p>
                <p>Автор</p>
                <p>Издательство</p>
                <p>Год издания</p>
                <p>Количество страниц</p>
                <p>Возрастное ограничение</p>
              </div>
              <div>
                <p>{book?.id}</p>
                <p>{book?.author}</p>
                <p>{book?.publisher}</p>
                <p>{book?.year}</p>
                <p>{book?.pages}</p>
                <p>{book?.ageLimit}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.left_bottom}>{book?.description}</div>
      </div>
      <div className={style.right}>
        <p className={cn(style.price, "text-5xl")}>{book?.price}с</p>
        <div className={style.buttons}>
          <Button disabled={book?.quantity ? false : true}>Купить</Button>
          <Button>
            <Icon type="favorites" />
          </Button>
        </div>
        {book?.quantity > 0 ? (
          <p className={style.in_stoke}>
            <img src="/images/check-mark.svg" alt="" /> В наличии
          </p>
        ) : (
          <p className={style.not_available}>
            <img src="/images/cross.svg" alt="" /> Нет в наличии
          </p>
        )}
        <div className={style.delivery}>
          <div>
            <img src="/images/delivery.svg" alt="" />
            <p>Доставка курьером</p>
          </div>
          <div>
            <img src="/images/gps.svg" alt="" />
            <p>В магазины сети, Бесплатно</p>
          </div>
          <div>
            <img src="/images/delivery.svg" alt="" />
            <p>Пункты выдачи</p>
          </div>
        </div>
      </div>
    </div>
  )
}