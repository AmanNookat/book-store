import { createSlice } from "@reduxjs/toolkit"
import { User } from "./interfaces"

interface InitState {
  profile: User | null
  loading: boolean
  error: boolean
}

const initialState: InitState = {
  profile: null,
  loading: false,
  error: false,
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})
