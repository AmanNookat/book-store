import { create, useModal } from "@ebay/nice-modal-react"

export const useCustomModal = (modalPresenter: any) => {
  const customModal = create(modalPresenter)
  return useModal(customModal)
}
