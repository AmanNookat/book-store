import { Announcement, Layout } from "@/shared/ui"
import { LayoutHeader } from "@/widgets/LayoutHeader"
import { ToastContainer } from "react-toastify"

export const baseLayout = (
  <>
    <Layout
      announcementSlot={
        <Announcement>
          <span>Войдите или зарегистируйтесь, чтобы получить скидку</span>
        </Announcement>
      }
      headerSlot={<LayoutHeader />}
    />
    <ToastContainer />
  </>
)
