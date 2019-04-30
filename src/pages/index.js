import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const PostsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

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

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h2 style={{ margin: "0 20px 20px 20px" }}>
          Blog
        </h2>
        <PostsWrapper>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Post key={node.fields.slug} to={node.fields.slug}>
                <img
                  src={node.frontmatter.image}
                  alt=""
                  style={{ marginBottom: 10 }}
                />
                <h3
                  style={{
                    margin: 0,
                    marginBottom: 12,
                    color: "#484848",
                  }}
                >
                  <Link
                    style={{ boxShadow: `none`, color: "#2B2B2B" }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>

                <p
                  style={{
                    color: "#767676",
                    fontWeight: 400,
                    textAlign: "justify",
                    margin: "12px 0",
                    lineHeight: 1.5,
                    marginBottom: 35,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Date>
                  <small style={{ margin: 0 }}>{node.frontmatter.date.toUpperCase()}</small>
                </Date>
              </Post>
            )
          })}
        </PostsWrapper>
      </Layout>
    )
  }
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
