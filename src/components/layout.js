import React from "react"
import { Link } from "gatsby"

import { headerData } from "./headerData"

import { rhythm, scale } from "../utils/typography"
import Header from "./Header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
  
    return (
      <div>
        <Header menuItems={headerData.menuItems} />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            paddingTop: 100,
            fontFamily: 'Cabin'
          }}
        >
          <main>{children}</main>

          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
