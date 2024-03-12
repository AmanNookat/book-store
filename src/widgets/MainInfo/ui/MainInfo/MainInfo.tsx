import { mainInfoContent } from "@/shared/lib"
import { MainInfoCard } from "../MainInfoCard/MainInfoCard"
import style from "./MainInfo.module.scss"

export const MainInfo = () => {
  return (
    <div className={style.root}>
      {mainInfoContent.map((elem) => (
        <MainInfoCard
          title={elem.title}
          description={elem.description}
          image={elem.image}
          key={elem.title}
        />
      ))}
    </div>
  )
}
