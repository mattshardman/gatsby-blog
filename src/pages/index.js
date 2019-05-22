import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import { Fade } from 'react-reveal';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Background from '../components/Background';
import Mac from '../components/mac/Mac';
import Button from '../components/MainButton';
import IPhone from '../components/iphone/Iphone';
import Tech from '../components/Tech';
import Projects from '../components/Projects';
import Dock from '../components/mac/Dock';
import Terminal from '../components/mac/Terminal';
import IPhoneApp from '../components/iphone/App';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding-top: 60px;
  }
`;

const ButtonSection = styled.div`
  position: absolute;
  bottom: 12%;
  display: flex;
  justify-content: space-between;
  width: 400px;

  @media (max-width: 600px) {
    position: static;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`;

function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={['blog', 'gatsby', 'javascript', 'react']} />

      <Background />

      <Container>
        <Fade delay={200}>
          <Mac>
            <Terminal />
            <Dock />
          </Mac>
        </Fade>
        <IPhone>
          <IPhoneApp />
        </IPhone>

        <ButtonSection>
          <Button text="projects" color="#fff" background="#24292e" />
          <Button text="github" icon={<FaGithub />} background="#fff" />
        </ButtonSection>

      </Container>
      <Tech />
      <Projects />
    </Layout>
  );
}

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
