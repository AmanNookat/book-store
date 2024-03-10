import { ToastContent, ToastOptions, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export enum NOTIFY_TYPES {
  error = "errors",
  warning = "warning",
  success = "success",
  info = "info",
}

interface CommonOptions extends ToastOptions<ToastContent> {
  position: ToastOptions<ToastContent>["position"]
  autoClose: ToastOptions<ToastContent>["autoClose"]
}

export const notify = (
  message: string,
  type: NOTIFY_TYPES = NOTIFY_TYPES.success,
  closeTime: number = 1000
): void => {
  const commonOptions: CommonOptions = {
    position: "top-center",
    autoClose: closeTime,
  }

  switch (type) {
    case NOTIFY_TYPES.error:
      toast.error(message, commonOptions)
      break
    case NOTIFY_TYPES.warning:
      toast.warning(message, commonOptions)
      break
    case NOTIFY_TYPES.success:
      toast.success(message, commonOptions)
      break
    case NOTIFY_TYPES.info:
      toast.info(message, commonOptions)
      break
    default:
      toast(message, commonOptions)
  }
}
