export const saveAuth = (email: Email) =>
  localStorage.setItem("readonly", email)

export const getAuth = () => localStorage.getItem("readonly") || null

export const removeAuth = () => localStorage.removeItem("readonly")
