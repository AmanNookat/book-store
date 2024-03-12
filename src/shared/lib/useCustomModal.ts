import { create, useModal } from "@ebay/nice-modal-react"

export const useCustomModal = (modalPresenter: React.FC<any>) => {
  const customModal = create(modalPresenter)
  return useModal(customModal)
}
