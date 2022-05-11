import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
        
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
