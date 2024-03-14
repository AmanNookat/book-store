import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer } from "./Footer/Footer"

interface Props {
  navbarSlot?: React.ReactNode
  headerSlot: React.ReactNode
  bottomSlot?: React.ReactNode
  announcementSlot?: React.ReactNode
  sidebarSlot?: React.ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      {props.announcementSlot}
      {props.navbarSlot}
      {props.headerSlot}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        <div>
          <Outlet />
        </div>
        {props.sidebarSlot && <aside>{props.sidebarSlot}</aside>}
      </div>
      <Footer />
      {props.bottomSlot}
      <ScrollRestoration />
    </div>
  )
}
