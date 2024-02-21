import { Outlet, ScrollRestoration } from "react-router-dom"

interface Props {
  navbarSlot?: React.ReactNode
  headerSlot: React.ReactNode
  bottomSlot?: React.ReactNode
  announcementSlot?: React.ReactNode
  sidebarSlot?: React.ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <div className="">
      {props.announcementSlot}
      {props.navbarSlot}
      {props.headerSlot}
      <div
        className=""
        style={{
          maxWidth: 1300,
          margin: "0 auto",
        }}
      >
        <div className="">
          <Outlet />
        </div>
        {props.sidebarSlot && <aside className="">{props.sidebarSlot}</aside>}
      </div>
      <footer className="">
        <div className="">Footer {new Date().getFullYear()}</div>
      </footer>
      {props.bottomSlot}
      <ScrollRestoration />
    </div>
  )
}
