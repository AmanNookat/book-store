import { MainInfo } from "@/widgets/MainInfo"
import { MainSlider } from "@/widgets/MainSlider"

export const MainHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <MainSlider />
      <MainInfo />
    </div>
  )
}
