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

const Post = styled.div`
  width: 33.3%;
  padding: 20px;

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

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
        <h1 style={{ margin: "0 20px 20px 20px" }}>Blog</h1>
        <PostsWrapper>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            console.log(node.frontmatter.image)
            return (
              <Post key={node.fields.slug}>
                <img
                  src={node.frontmatter.image}
                  alt=""
                  style={{ marginBottom: 10 }}
                />
                <h3
                  style={{
                    margin: 0,
                    marginBottom: 12,
                    fontFamily: "Cabin",
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
                  }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />

                <small>{node.frontmatter.date}</small>
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
