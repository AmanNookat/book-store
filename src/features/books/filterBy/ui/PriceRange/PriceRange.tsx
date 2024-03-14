import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Button, Input } from "@/shared/ui"
import { ChangeEvent, useEffect, useState } from "react"
import { setPriceRangeState } from "@/features/books"
import { getBooks } from "@/entities/books"
import style from "./PriceRange.module.scss"

export const PriceRange = () => {
  const { priceRange } = useAppSelector((state) => state.books)
  const [prices, setPrices] = useState({
    minPrice: "",
    maxPrice: "",
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!priceRange) {
      setPrices({
        minPrice: "",
        maxPrice: "",
      })
    }
  }, [priceRange])

  const handleClickPricesRanges = () => {
    dispatch(setPriceRangeState(prices))
    dispatch(getBooks())
  }

  return (
    <div className={style.root}>
      <Input
        type="number"
        placeholder="Мин. цена"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPrices({ ...prices, minPrice: e.target.value })
        }
        value={prices.minPrice}
      />
      <span>---</span>
      <Input
        type="number"
        placeholder="Макс. цена"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPrices({ ...prices, maxPrice: e.target.value })
        }
        value={prices.maxPrice}
      />
      <Button onClick={handleClickPricesRanges}>Искать</Button>
    </div>
  )
}
