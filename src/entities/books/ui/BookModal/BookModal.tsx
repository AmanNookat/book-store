import { useAppDispatch } from "@/shared/model"
import { Button, Input, Modal } from "@/shared/ui"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { addBook } from "../../api/bookApi"
import { ageLimits, bookCategories } from "@/shared/lib/constants/book-keys"
import { AgeLimit, Book, BookCategory } from "../.."
import { Select } from "@/shared/ui/Select/Select"

interface Props {
  title: string
  onConfirm?: () => void
  onCancel: () => void
  confirmText: string
  book?: Book
}

export const AdminModalPresenter: React.FC<Props> = ({
  title,
  onCancel,
  confirmText,
  book,
}) => {
  const [editedBook, setEditedBook] = useState<Book | null>(null)
  const dispatch = useAppDispatch()
  const { handleSubmit, register, reset } = useForm()

  const onSubmitHandler = useCallback(async (data: any) => {
    await dispatch(addBook(data))
      .unwrap()
      .then(() => reset())
  }, [])

  useEffect(() => {
    book && setEditedBook(book)
  }, [])

  console.log("render")

  const handleInputChange = (field: keyof Book, value: string | number) => {
    if (book) {
      setEditedBook({ ...editedBook!, [field]: value })
    }
  }

  return (
    <Modal>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
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
            <label>{label}</label>
            {field === "ageLimit" || field === "category" ? (
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
            ) : (
              <Input
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
        <div>
          <Button onClick={onCancel}>Отмена</Button>
          <Button type="submit">{confirmText}</Button>
        </div>
      </form>
    </Modal>
  )
}
