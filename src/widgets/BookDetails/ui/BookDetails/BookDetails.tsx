import { Book, BookModal, deleteBook, editBook } from "@/entities/books"
import { Button } from "@/shared/ui"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { getAuth, useCustomModal } from "@/shared/lib"
import { useCallback, useEffect, useState } from "react"
import { getUser } from "@/features/users/users"
import style from "./BookDetails.module.scss"
import cn from "classnames"
import { FavoriteButton } from "@/features/favorites"
import { addBookToCart, checkBookInCart } from "@/features/cart"
import { Loader } from "@/shared/ui/Loader/Loader"

interface Props {
  book: Book
}

export const BookDetails: React.FC<Props> = ({ book }) => {
  const { data, loading, error } = useAppSelector((state) => state.users.user)
  const { cart } = useAppSelector((state) => state.cart)
  const [bookInCart, setBookInCart] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const email = getAuth()
  const editBookModal = useCustomModal(BookModal)

  useEffect(() => {
    setBookInCart(checkBookInCart(book?.id!))
  }, [cart])

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    editBookModal.show({
      // @ts-ignore
      title: "Редактировать книгу",
      confirmText: "Сохранить",
      book: book,
      onConfirm: (editedBook: Book) => {
        dispatch(editBook(editedBook))
        editBookModal.remove()
      },
      onCancel: () => editBookModal.remove(),
    })
  }, [])

  useEffect(() => {
    email ? dispatch(getUser(email)) : null
  }, [])

  return loading ? (
    <Loader color="blue" size="l" />
  ) : error ? (
    <div>Error</div>
  ) : (
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
          <Button
            theme={bookInCart ? "primary" : undefined}
            onClick={() => {
              setBookInCart(true)

              return bookInCart
                ? navigate("/user/cart")
                : addBookToCart({
                    title: book?.title,
                    author: book?.author,
                    coverImg: book?.coverImg,
                    price: book?.price,
                    id: book?.id!,
                  })
            }}
            disabled={!book?.quantity}
          >
            {book?.quantity > 0
              ? bookInCart
                ? "Оформить"
                : "Купить"
              : "Распродано"}
          </Button>
          <FavoriteButton
            book={{
              author: book?.author,
              coverImg: book?.coverImg,
              title: book?.title,
              id: book?.id!,
            }}
          />
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
          {data?.isAdmin && (
            <div className={style.admin_btns}>
              <Button theme="primary" onClick={onClick}>
                Изменить
              </Button>
              <Button
                theme="primary"
                onClick={() => {
                  dispatch(deleteBook(book?.id!))
                  navigate("/")
                }}
              >
                Удалить
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
