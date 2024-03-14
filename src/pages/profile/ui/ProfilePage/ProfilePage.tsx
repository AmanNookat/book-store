import { BookModal } from "@/entities/books/ui/BookModal/BookModal"
import { logout } from "@/features/users/users/model/slice"
import { useCustomModal } from "@/shared/lib/useCustomModal"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Button } from "@/shared/ui"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import style from "./ProfilePage.module.scss"
import cn from "classnames"
import { getAuth } from "@/shared/lib"
import { Loader } from "@/shared/ui/Loader/Loader"

export const ProfilePage = () => {
  const { data, loading, error } = useAppSelector((state) => state.users.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const email = getAuth()
  const addBookModal = useCustomModal(BookModal)

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
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
  }, [])

  return loading ? (
    <Loader color="blue" size="l" />
  ) : error ? (
    <div>Error</div>
  ) : (
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
        <Button theme="primary" onClick={onClick}>
          Добавить книгу
        </Button>
      )}
      <Button onClick={() => dispatch(logout(navigate))}>Выйти</Button>
    </div>
  )
}
