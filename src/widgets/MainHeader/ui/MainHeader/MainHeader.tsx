import { MainInfo } from "@/widgets/MainInfo"
import { MainSlider } from "@/widgets/MainSlider"
import style from "./MainHeader.module.scss"

export const MainHeader = () => {
  return (
    <div className={style.root}>
      <MainSlider />
      <MainInfo />
    </div>
  )
}
