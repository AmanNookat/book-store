import { getBooks } from "@/entities/books/api/bookApi"
import { setPriceRangeState } from "@/features/books/model/slice"
import { useAppDispatch, useAppSelector } from "@/shared/model"
import { Button, Input } from "@/shared/ui"
import { ChangeEvent, useEffect, useState } from "react"
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
      <Button
        onClick={() => {
          dispatch(setPriceRangeState(prices))
          dispatch(getBooks())
        }}
      >
        Искать
      </Button>
    </div>
  )
}
