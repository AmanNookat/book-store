import { Announcement, Layout } from "@/shared/ui"
import { LayoutHeader } from "@/widgets/LayoutHeader"
import { PageUpButton } from "@/widgets/PageUpButton"

export const baseLayout = (
  <Layout
    announcementSlot={
      <Announcement>
        <span>Объявление</span>
      </Announcement>
    }
    bottomSlot={<PageUpButton />}
    headerSlot={<LayoutHeader />}
  />
)
