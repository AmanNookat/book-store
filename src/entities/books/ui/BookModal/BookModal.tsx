import { useAppDispatch } from "@/shared/model"
import { Button, Input, Modal } from "@/shared/ui"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { addBook } from "../../api/bookApi"
import { Select } from "@/shared/ui/Select/Select"
import { ageLimits, bookCategories } from "@/shared/lib/constants/book-keys"

interface Props {
  title: string
  onConfirm?: () => void
  onCancel: () => void
  confirmText: string
}

export const AdminModalPresenter: React.FC<Props> = ({
  title,
  onCancel,
  confirmText,
}) => {
  const dispatch = useAppDispatch()
  const { handleSubmit, register, reset } = useForm()

  const onSubmitHandler = useCallback(async (data: any) => {
    await dispatch(addBook(data))
      .unwrap()
      .then(() => reset())
  }, [])

  return (
    <Modal>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label>Название</label>
          <Input register={register("title")} />
        </div>
        <div>
          <label>Автор</label>
          <Input register={register("author")} />
        </div>
        <div>
          <label>Возрастное ограничение</label>
          <Select
            title="возраст"
            options={ageLimits}
            register={register("ageLimit")}
          />
        </div>
        <div>
          <label>Категория</label>
          <Select
            title="категория"
            options={bookCategories}
            register={register("category")}
          />
        </div>
        <div>
          <label>Обложка</label>
          <Input register={register("coverImg")} />
        </div>
        <div>
          <label>Цена</label>
          <Input type="number" register={register("price")} />
        </div>
        <div>
          <label>Страниц</label>
          <Input type="number" register={register("pages")} />
        </div>
        <div>
          <label>Издатель</label>
          <Input register={register("publisher")} />
        </div>
        <div>
          <label>Год</label>
          <Input type="number" register={register("year")} />
        </div>
        <div>
          <label>Количество</label>
          <Input type="number" register={register("quantity")} />
        </div>
        <div>
          <label>Описание</label>
          <Input register={register("description")} />
        </div>
        <div>
          <Button onClick={onCancel}>Отмена</Button>
          <Button type="submit">{confirmText}</Button>
        </div>
      </form>
    </Modal>
  )
}
