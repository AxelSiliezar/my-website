import React from "react"
import Link from "gatsby-link"

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Welcome to my <br />
          Website
        </h1>
        <p>
          My name is Axel Siliezar. Undergraduate Student at Univeristy of
          California, Merced.
        </p>
        <p>Please enjoy your stay.</p>
        <Link to="/page-2/">Start Here</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
