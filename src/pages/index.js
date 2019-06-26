import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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

const keywords = ['blog', 'gatsby',
  'javascript', 'react',
  'portfolio', 'golang',
  'developer', 'wiltshire', 'bath', 'bristol', 'software', 'UK'];


function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={keywords}
      />

      <Background />

      <Container>
        <Mac>
          <Terminal />
          <Dock />
        </Mac>
        <IPhone>
          <IPhoneApp />
        </IPhone>

        <ButtonSection>
          <AnchorLink href="#projects" style={{ width: '100%' }}>
            <Button text="projects" color="#fff" background="#24292e" />
          </AnchorLink>
          <a
            href="https://github.com/mattshardman"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%' }}
          >
            <Button text="github" icon={<FaGithub />} background="#fff" />
          </a>
        </ButtonSection>

      </Container>
      <Tech />
      <Projects />
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.arrayOf().isRequired,
  location: PropTypes.shape().isRequired,
};

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
