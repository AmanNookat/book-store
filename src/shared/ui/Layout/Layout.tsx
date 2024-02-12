import { FC, ReactNode } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

interface Props {
  navbarSlot?: ReactNode
  headerSlot: ReactNode
  bottomSlot?: ReactNode
  announcementSlot?: ReactNode
  sidebarSlot?: ReactNode
}

export const Layout: FC<Props> = (props) => {
  return (
    <div className="">
      {props.announcementSlot}
      {props.navbarSlot}
      {props.headerSlot}
      <div className="">
        <div className="">
          <Outlet />
        </div>
        {props.sidebarSlot && <aside className="">{props.sidebarSlot}</aside>}
      </div>
      <footer className="">
        <div className="">{new Date().getFullYear()}</div>
      </footer>
      {props.bottomSlot}
      <ScrollRestoration />
    </div>
  )
}
