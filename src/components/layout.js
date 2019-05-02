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
            maxWidth: "100%",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: 'center'
          }}
        >
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
