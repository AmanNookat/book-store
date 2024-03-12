import { useAppDispatch } from "@/shared/model"
import { Button, Input, Modal, Select } from "@/shared/ui"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ageLimits, bookCategories } from "@/shared/lib"
import { useForm } from "react-hook-form"
import { Book, addBook } from "../.."
import style from "./BookModal.module.scss"

interface Props {
  title: string
  onConfirm?: (arg?: Book) => void
  onCancel: () => void
  confirmText: string
  book?: Book
}

export const BookModal: React.FC<Props> = ({
  title,
  onConfirm,
  onCancel,
  confirmText,
  book,
}) => {
  const [editedBook, setEditedBook] = useState<Book | null>(null)
  const dispatch = useAppDispatch()
  const { handleSubmit, register, reset } = useForm()

  const onSubmitHandler = useCallback(
    async (data: any) => {
      if (book) {
        onConfirm!(editedBook!)
        return
      }
      await dispatch(addBook(data))
        .unwrap()
        .then(() => reset())
    },
    [editedBook]
  )

  useEffect(() => {
    book && setEditedBook(book)
  }, [])

  const handleInputChange = (field: keyof Book, value: string | number) => {
    if (book) {
      setEditedBook({ ...editedBook!, [field]: value })
    }
  }

  return (
    <Modal>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={style.root}>
        {Object.entries({
          title: "Название",
          author: "Автор",
          ageLimit: "Возрастное ограничение",
          category: "Категория",
          coverImg: "Обложка",
          price: "Цена",
          pages: "Страниц",
          publisher: "Издатель",
          year: "Год",
          quantity: "Количество",
          description: "Описание",
        }).map(([field, label]) => (
          <div key={field}>
            {field === "ageLimit" || field === "category" ? (
              <div className={style.select}>
                <label>{label}</label>
                <Select
                  title={field === "ageLimit" ? "возраст" : "категория"}
                  options={field === "ageLimit" ? ageLimits : bookCategories}
                  register={register(field)}
                  value={book && editedBook?.[field]}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleInputChange(
                      field as keyof Book,
                      e.target.value as string
                    )
                  }
                />
              </div>
            ) : (
              <Input
                placeholder={label}
                type={
                  field === "price" ||
                  field === "pages" ||
                  field === "year" ||
                  field === "quantity"
                    ? "number"
                    : "text"
                }
                register={register(field)}
                // @ts-ignore
                value={book && editedBook?.[field]}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(
                    field as keyof Book,
                    field === "price" ||
                      field === "pages" ||
                      field === "year" ||
                      field === "quantity"
                      ? +e.target.value
                      : e.target.value
                  )
                }
              />
            )}
          </div>
        ))}
        <div className={style.buttons}>
          <Button onClick={onCancel}>Отмена</Button>
          <Button type="submit">{confirmText}</Button>
        </div>
      </form>
    </Modal>
  )
}
