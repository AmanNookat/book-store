import { AdminModalPresenter } from "@/entities/books/ui/BookModal/BookModal"
import { getUser } from "@/features/users/users/api/usersApi"
import { logout } from "@/features/users/users/model/slice"
import { getAuth } from "@/shared/lib/auth"
import { useCustomModal } from "@/shared/lib/useCustomModal"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Button } from "@/shared/ui"
import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ProfilePage = () => {
  const { data, loading, error } = useAppSelector((state) => state.users.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const email = getAuth()
  const addBookModal = useCustomModal(AdminModalPresenter)

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

  useEffect(() => {
    email ? dispatch(getUser(email)) : null
  }, [])

  return (
    <div>
      <img
        src={
          data?.image
            ? data?.image
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
        }
        width={100}
        alt="avatar"
      />
      <p>email: {data?.email}</p>
      <p>nickname: {data?.nickname}</p>
      <p>age: {data?.age}</p>
      <p>about: {data?.about}</p>
      {data?.isAdmin && (
        <Button theme="primary" onClick={onClick}>
          Добавить книгу
        </Button>
      )}
      <Button onClick={() => dispatch(logout(navigate))}>Выйти</Button>
    </div>
  )
}
