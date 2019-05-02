import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

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

const Heading = styled.h3`
  margin: 0;
  margin-bottom: 12px;
  color: #484848;
`

const Paragraph = styled.p`
  color: #767676;
  font-weight: 400;
  text-align: justify;
  margin: 12px 0;
  line-height: 1.5;
  margin-bottom: 35px;
`

const Date = styled.div`
  box-sizing: border-box;
  width: calc(100% - 40px);
  position: absolute;
  bottom: 15px;
  left: 20px;
  color: #000;
`

function PostCard({ node }) {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <Post key={node.fields.slug} to={node.fields.slug}>
      <img src={node.frontmatter.image} alt="" style={{ marginBottom: 10 }} />
      <Heading>
        <Link
          style={{ boxShadow: `none`, color: "#2B2B2B" }}
          to={node.fields.slug}
        >
          {title}
        </Link>
      </Heading>

      <Paragraph
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
      <Date>
        <small style={{ margin: 0 }}>
          {node.frontmatter.date.toUpperCase()}
        </small>
      </Date>
    </Post>
  )
}

export default PostCard
