import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="m-0 text-5xl">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="font-bold font-sans no-underline text-sm" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="m-auto max-w-2xl" data-is-root-path={isRootPath}>
      <header className="mb-12">{header}</header>
      <main>{children}</main>
      <footer className="px-0 py-6">
        © {new Date().getFullYear()}, iamskratsch
      </footer>
    </div>
  )
}

export default Layout
