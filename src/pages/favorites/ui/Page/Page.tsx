import { getUser } from "@/features/users/users/api/usersApi"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { useEffect } from "react"
import cn from "classnames"
import style from "./Page.module.scss"
import { Button } from "@/shared/ui"
import { toggleBookFavorites } from "@/features/favorites/favoritesActions/model/toggleFavorites"
import { useNavigate } from "react-router-dom"
import { getAuth, textCut } from "@/shared/lib"

export const FavoritesPage = () => {
  const { data } = useAppSelector((state) => state.users.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div className={style.root}>
      {data?.favorites.length! > 0 ? (
        data?.favorites.map((elem) => (
          <div key={elem.id} className={cn(style.card, "shadow")}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${elem.coverImg})` }}
              onClick={() => navigate(`/book/${elem.id}`)}
            ></div>
            <h3>{textCut(elem.title)}</h3>
            <p className="text-sm">{elem.author}</p>
            <Button onClick={() => dispatch(toggleBookFavorites(elem))}>
              Убрать из закладок
            </Button>
          </div>
        ))
      ) : (
        <img
          src="https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2021/03/ex4.png"
          height={500}
          alt=""
        />
      )}
    </div>
  )
}
