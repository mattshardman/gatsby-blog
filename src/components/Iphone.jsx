import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 400px;
  width: 200px;
  background: black;
  border-radius: 25px;
  border: 1px #7D7D7 solid;
  box-shadow: 0 0 0 2px #323233, 0 30px 60px rgba(0, 0, 0, 0.19),
    inset 0 -3px 2px rgb(150, 150, 150), inset 0 2px 1px rgb(150, 150, 150);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    display: none;
  }
`

const Screen = styled.div`
  height: 380px;
  width: 180px;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(100deg, red, purple);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const TopSection = styled.div`
  width: 100%;
  height: 3.5%;
  display: flex;
  justify-content: center;
`

const Notch = styled.div`
  width: 55%;
  height: 100%;
  background: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
`

const Speaker = styled.div`
  width: 30%;
  height: 25%;
  background: rgb(30, 30, 30);
  border-radius: 5px;
  margin-top: 1px;
`

const Camera = styled.div`
  position: absolute;
  margin-top: 1px;
  height: 4px;
  width: 4px;
  background: linear-gradient(175deg, #024993, black);
  margin-left: 20px;
  border-radius: 50%;
`

function IPhone({ backgroundImage, children }) {
  return (
    <Container>
      <Screen>
        <TopSection>
          <Notch>
            <Speaker />
            <Camera />
          </Notch>
        </TopSection>
        {children}
      </Screen>
      <div />
    </Container>
  )
}

export default IPhone
