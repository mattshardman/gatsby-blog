import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 250px;
  background: #eaeaea;
  /* display: flex;
  align-items: center; */
  border-top: 1px #ddd solid;
  border-bottom: 1px #ddd solid;
  overflow-X: scroll;
`

const LogoWrapper = styled.div`
  width: 1200px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  
`

const ImgWrapper = styled.div`
  margin: 0 20px;
  padding: 0;
  height: 50px;
  filter: grayscale(100%);
`

const logos = [
  "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1280px-Docker_%28container_engine%29_logo.svg.png",
  "https://www.cloudcms.com/documentation/graphql/graphql-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1280px-Node.js_logo_2015.svg.png",
]

function Tech() {
  return (
    <Container>
        <LogoWrapper>
      {logos.map(logo => (
        <ImgWrapper>
          <img src={logo} 
          height="100%" style={{ padding: 0, margin: 0 }} />
        </ImgWrapper>
      ))}
      </LogoWrapper>
    </Container>
  )
}

export default Tech
