import style from "./MainInfoCard.module.scss"

interface Props {
  title: string
  description: string
  image: Url
}

export const MainInfoCard: React.FC<Props> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className={style.root}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img src={image} alt={title} />
    </div>
  )
}
