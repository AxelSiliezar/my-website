import React from "react"
import Link from "gatsby-link"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require("../images/logo-designcode.svg")} width="30" />
      </Link>
      <Link to="/courses">School</Link>
      <Link to="/downloads">Projects</Link>
      <Link to="/workshops">Social Life</Link>
      <Link to="/buy">
        <button>Contact</button>
      </Link>
    </div>
  </div>
)

export default Header
