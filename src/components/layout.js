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
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            width: 1200,
            maxWidth: "95%",
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            paddingTop: 80,
            fontFamily: "Cabin",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
