import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import PostCard from "../components/PostCard"

const Header = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: #eaeaea solid 1px;
`

const Heading = styled.h2`
  font-size: 35px;
  margin: 0;
  padding: 0;
`

const PostsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 1200px;
  max-width: 100%;
  padding: 0 5%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Post = styled(props => <Link {...props} />)`
  position: relative;
  width: 30%;
  padding: 20px;
  margin: 1.5%;
  border-radius: 5px;
  border: 1px #dadce0 solid;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 420ms, width 420ms, transform 420ms;

  @media (max-width: 900px) {
    width: 47%;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
`

const Date = styled.div`
  box-sizing: border-box;
  width: calc(100% - 40px);
  position: absolute;
  bottom: 15px;
  left: 20px;
  color: #000;
`

const TabBar = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Tabs = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 500px;
`

const Tab = styled.button`
  height: 28px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: white;
  border: none;
  outline: none;
  cursor: pointer;
`

const ActiveTabOutline = styled.div`
  position: absolute;
  height: 28px;
  width: 20%;
  border-radius: 14px;
  border: 1px #ff0078 solid;
  transform: ${({activeTab}) => `translateX(${133 * activeTab}%)`};
  transition: transform 200ms;
`

function BlogIndex (props) {
    const { data } = props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const [activeTab, setActiveTab] = useState(0);

    return (
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Header>
          <Heading>Blog</Heading>
          {/* <TabBar>
            <Tabs>
            <ActiveTabOutline activeTab={activeTab}/>
            <Tab onClick={() => setActiveTab(0)}>ALL</Tab>
            <Tab onClick={() => setActiveTab(1)}>UI</Tab>
            <Tab onClick={() => setActiveTab(2)}>BACK END</Tab>
            <Tab onClick={() => setActiveTab(3)}>DEV OPS</Tab>
            </Tabs>
          </TabBar> */}
        </Header>
        <PostsWrapper>
          {posts.map(({ node }) => {
            return <PostCard key={node.fields.slug} node={node} />
          })}
        </PostsWrapper>
      </Layout>
    )
  }


export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image
            description
          }
        }
      }
    }
  }
`
