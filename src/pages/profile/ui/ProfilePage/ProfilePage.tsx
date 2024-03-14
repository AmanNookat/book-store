import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Button, Loader } from "@/shared/ui"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "@/features/users/users"
import { useCustomModal } from "@/shared/lib"
import { BookModal } from "@/entities/books"
import style from "./ProfilePage.module.scss"
import cn from "classnames"

export const ProfilePage = () => {
  const { data, loading, error } = useAppSelector((state) => state.users.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const addBookModal = useCustomModal(BookModal)

  const onClickAddBook = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()

      addBookModal.show({
        // @ts-ignore
        title: "Добавить новую книгу",
        confirmText: "Добавить",
        onConfirm: () => {
          addBookModal.remove()
        },
        onCancel: () => addBookModal.remove(),
      })
    },
    []
  )

  if (loading) {
    return <Loader color="blue" size="l" />
  }
  if (error) {
    return <div>Error</div>
  }

  return (
    <div className={cn(style.root, "shadow")}>
      <img
        src={
          data?.image
            ? data?.image
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
        }
        alt="avatar"
      />
      <div>
        <p>email: {data?.email}</p>
        <p>nickname: {data?.nickname}</p>
        <p>age: {data?.age}</p>
        <p>about: {data?.about}</p>
      </div>
      {data?.isAdmin && (
        <Button theme="primary" onClick={onClickAddBook}>
          Добавить книгу
        </Button>
      )}
      <Button onClick={() => dispatch(logout(navigate))}>Выйти</Button>
    </div>
  )
}
