/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <script async src="https://api.countapi.xyz/hit/shenoy-anurag.github.io/9ae7f544-4743-4272-b898-cc30c80d30b3"></script>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  )
}
export default Layout
