import React from "react"
import Link from "gatsby-link"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require("../images/Siliezar.png")} width="90" />
      </Link>
      <Link to="/school">School</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/social">Social Life</Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  </div>
)

export default Header
