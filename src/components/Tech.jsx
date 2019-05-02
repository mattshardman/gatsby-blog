import React from "react"
import styled from "styled-components"

const Container = styled.section`
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background: #fafbfc;
  border-top: 1px #eaeaea solid;
  border-bottom: 1px #eaeaea solid;
`

const Header = styled.div`
  display: flex;
  align-items: flex-end;
`

const Heading = styled.h4`
  font-size: 20px;
  margin-bottom: 0;
`

const Wrapper = styled.div`
  width: 100%;
  overflow-X: hidden;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
  }
`

const LogoWrapper = styled.div`
  width: 1200px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  @media (max-width: 600px) {
    animation: slide 10s infinite linear;
  }
  
  @keyframes slide {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
`

const ImgWrapper = styled.div`
  margin: 0;
  padding: 0;
  filter: grayscale(100%) brightness(50%);
`

const logos = [
  "https://res.cloudinary.com/dgdniqfi9/image/upload/v1556814021/blog/logos.png",
  "https://res.cloudinary.com/dgdniqfi9/image/upload/v1556815131/blog/logos2.png",
]

function Tech() {
  return (
    <Container>
      {/* <Header>
        <Heading>Tech I Love</Heading>
      </Header> */}
      <Wrapper>
        <LogoWrapper>
          {logos.map(logo => (
            <ImgWrapper>
              <img 
                src={logo} 
                style={{ padding: 0, margin: 0 }} 
              />
            </ImgWrapper>
          ))}
        </LogoWrapper>
      </Wrapper>
    </Container>
  )
}

export default Tech
