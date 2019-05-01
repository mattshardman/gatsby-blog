import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { FaGithub } from 'react-icons/fa';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Background from "../components/Background"
import Mac from "../components/Mac"
import Button from "../components/MainButton"

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonSection = styled.div`
  position: absolute;
  bottom: 12%;
  display: flex;
  justify-content: space-between;
  width: 400px;
`

function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Background />
      <Container>
        <Mac />
        <ButtonSection>
          <Button text="projects" color="#fff" background="#24292e" />
          <Button text="github" icon={<FaGithub />} />
        </ButtonSection>
      </Container>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
