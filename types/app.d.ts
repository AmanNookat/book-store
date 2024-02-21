declare const _brand: unique symbol

declare global {
  // custom utility types
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T

  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  export type Indexed<
    K extends string | number | symbol = string,
    T = unknown
  > = {
    [key in K]: T
  }

  export type Brand<K, T> = K & { [_brand]: T }

  //  alias types
  export type Phone = string

  export type Email = string

  export type Id = number

  export type DateIso = string

  export type Timestamp = number

  export type Som = number

  export type Url = string

  export type Color = string

  // rtk types
  declare type RootState = import("../src/app/appStore").RootState
  declare type AppDispatch = import("../src/app/appStore").AppDispatch
}

export {}
