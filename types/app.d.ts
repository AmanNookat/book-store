declare global {
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
