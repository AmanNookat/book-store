import { MainInfo } from "@/widgets/MainInfo"
import { MainSlider } from "@/widgets/MainSlider"

export const MainHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <MainSlider />
      <MainInfo />
    </div>
  )
}
