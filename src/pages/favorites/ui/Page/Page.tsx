import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Button } from "@/shared/ui"
import { useNavigate } from "react-router-dom"
import { textCut } from "@/shared/lib"
import { toggleBookFavorites } from "@/features/favorites"
import cn from "classnames"
import style from "./Page.module.scss"
import { BookInFav } from "@/entities/favorites"

export const FavoritesPage = () => {
  const { data } = useAppSelector((state) => state.users.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClick = (elem: BookInFav) => {
    dispatch(toggleBookFavorites(elem))
  }

  const handleClickNavigate = (elemId: number) => {
    navigate(`/book/${elemId}`)
  }

  if (data?.favorites.length! < 0) {
    return (
      <img
        src="https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2021/03/ex4.png"
        height={500}
        alt=""
      />
    )
  }

  return (
    <div className={style.root}>
      {data?.favorites.map((elem) => (
        <div key={elem.id} className={cn(style.card, "shadow")}>
          <div
            className={style.image}
            style={{ backgroundImage: `url(${elem.coverImg})` }}
            onClick={() => handleClickNavigate(elem.id)}
          />
          <h3>{textCut(elem.title)}</h3>
          <p className="text-sm">{elem.author}</p>
          <Button onClick={() => handleClick(elem)}>Убрать из закладок</Button>
        </div>
      ))}
    </div>
  )
}
