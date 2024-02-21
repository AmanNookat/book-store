export const saveToken = (token: string) =>
  localStorage.setItem("e-commerce", token)

export const getToken = () => localStorage.getItem("e-commerce")

export const removeToken = () => localStorage.removeItem("e-commerce")
