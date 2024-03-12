import axios, { AxiosError } from "axios"

export const instance = axios.create({
  baseURL: "http://localhost:7777/",
  headers: {
    "Content-Type": "application/json",
  },
})

instance.interceptors.response.use(
  (data) => {
    return data
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)
