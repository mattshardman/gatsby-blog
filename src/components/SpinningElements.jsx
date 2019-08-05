import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const CircleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  overflow: hidden;

  @media(max-width: 900px) {
    display: none;
  }
`;

const BigCircleLeft = styled.div`
    position: absolute;
    height: ${({ size }) => `${size}px`};
    width: ${({ size }) => `${size}px`};
    top: ${({ top }) => `${top}px`};
    left: ${({ size }) => `-${size / 2}px`};
    border-radius: 50%;
    border: 1px dashed rgba(0, 0, 0, 0.1);
    animation: rotate 60s infinite linear;

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
`;

const BigCircleRight = styled.div`
    position: absolute;
    height: ${({ size }) => `${size}px`};
    width: ${({ size }) => `${size}px`};
    top: ${({ top }) => `${top}px`};
    right: ${({ size }) => `-${size / 2}px`};
    border-radius: 50%;
    border: 1px dashed rgba(0, 0, 0, 0.1);
    animation: rotateR 60s infinite linear;

    @keyframes rotateR {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
`;

const CircleLeft = styled.div`
    position: absolute;
    top: ${({ top }) => `${top}px`};
    left: ${({ size }) => `${size}px`};
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #fff;
    display: flex; 
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.05);
    animation: rotateCir 60s infinite linear;
    filter: grayscale(1);

    @keyframes rotateCir {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
`;

const CircleRight = styled.div`
    position: absolute;
    top: ${({ top }) => `${top}px`};
    left: ${({ size }) => `${size}px`};
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #fff;
    display: flex; 
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.05);
    animation: rotateCirR 60s infinite linear;
    filter: grayscale(1);

    @keyframes rotateCirR {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
`;

export const fluidImg = graphql`
fragment fluidImg on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const languageQuery = graphql`
  query LanguageQuery {
    js: file(absolutePath: { regex: "/js.png/" }) {
      ...fluidImg
    }
    rust: file(absolutePath: { regex: "/rust.png/" }) {
      ...fluidImg
    }
    react: file(absolutePath: { regex: "/react.png/" }) {
      ...fluidImg
    }
    node: file(absolutePath: { regex: "/node.png/" }) {
      ...fluidImg
    }
  }
`;

function SpinningElements() {
  return (
    <StaticQuery
      query={languageQuery}
      render={({
        js, rust, react, node,
      }) => (
        <CircleWrapper>
          <BigCircleLeft size={400} top={175}>
            <CircleLeft size={175} top={-25}>
              <Image
                fluid={js.childImageSharp.fluid}
                alt="tech logo"
                style={{ padding: 0, margin: 0, width: 25 }}
              />
            </CircleLeft>
            <CircleLeft size={175} top={375}><Image
              fluid={js.childImageSharp.fluid}
              alt="tech logo"
              style={{ padding: 0, margin: 0, width: 25 }}
            />
            </CircleLeft>
          </BigCircleLeft>
          <BigCircleLeft size={600} top={75}>
            <CircleLeft size={270} top={575}><Image
              fluid={rust.childImageSharp.fluid}
              alt="tech logo"
              style={{ padding: 0, margin: 0, width: 25 }}
            />
            </CircleLeft>
            <CircleLeft size={275} top={-25}><Image
              fluid={rust.childImageSharp.fluid}
              alt="tech logo"
              style={{ padding: 0, margin: 0, width: 25 }}
            />
            </CircleLeft>
          </BigCircleLeft>
          <BigCircleRight size={400} top={175}>
            <CircleRight size={175} top={-25}><Image
              fluid={react.childImageSharp.fluid}
              alt="tech logo"
              style={{ padding: 0, margin: 0, width: 25 }}
            />
            </CircleRight>
            <CircleRight size={175} top={375}><Image
              fluid={react.childImageSharp.fluid}
              alt="tech logo"
              style={{ padding: 0, margin: 0, width: 25 }}
            />
            </CircleRight>
          </BigCircleRight>
          <BigCircleRight size={600} top={75}>
            <CircleRight size={275} top={-25}><Image
              fluid={node.childImageSharp.fluid}
              alt="tech logo"
              style={{ padding: 0, margin: 0, width: 25 }}
            />
            </CircleRight>
            <CircleRight size={275} top={575}><Image
              fluid={node.childImageSharp.fluid}
              alt="tech logo"
              style={{ padding: 0, margin: 0, width: 25 }}
            />
            </CircleRight>
          </BigCircleRight>
        </CircleWrapper>
      )}
    />
  );
}

export default SpinningElements;
