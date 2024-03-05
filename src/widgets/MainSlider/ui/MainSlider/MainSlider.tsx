import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export const MainSlider = () => {
  return (
    <Carousel>
      <div>
        <img src="https://content.img-gorod.ru/content/main-banner/3709-imageWeb.png?width=1200&height=400&fit=bounds" />
      </div>
      <div>
        <img src="https://content.img-gorod.ru/content/main-banner/3703-imageWeb.jpg?width=1200&height=400&fit=bounds" />
      </div>
      <div>
        <img src="https://content.img-gorod.ru/content/main-banner/3704-imageWeb.png?width=1200&height=400&fit=bounds" />
      </div>
      <div>
        <img src="https://content.img-gorod.ru/content/main-banner/3701-imageWeb.png?width=1200&height=400&fit=bounds" />
      </div>
    </Carousel>
  )
}
