import React, { useState, useEffect } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import Card from './Card';

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 25px;
  border-top: 1px #eaeaea solid;
`;

const Heading = styled.div`
  width: 100%;
  padding-top: 30px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 30px;
  padding-bottom: 125px;
  z-index: 5;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    overflow: scroll;
    scroll-snap-type: x mandatory;
    justify-content: flex-start;
  }
`;

const Cards = styled.div`
    display: flex; 
    padding: 0px 5%;
    transform: ${({ active }) => `translateX(${-(active * 320 - 960)}px)`};
    transition: transform 420ms;

    @media (max-width: 500px) {
      transition: transform 220ms;
      transform: none;
      padding-left: calc(50% - 125px);
      padding-right: calc(50% - 125px);
    }
    
`;

const cards = [
  {
    title: 'Now Boom',
    text: 'A command line tool for testing serverless functions locally.',
    buttons: [
      {
        text: '',
        link: '',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/mattshardman/now-boom',
      },
    ],
  },
  {
    title: 'Downswood Alpacas',
    text: 'A website for a rural Alpaca walking company. Built with Gatsby.js.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://downswoodalpacas.co.uk',
      },
    ],
  },
  {
    title: 'Wack Jack',
    text: 'Wack jack is a black jack progressive web-app built using next.js',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://blackjack.now.sh',
      },

    ],
  },
  {
    title: 'Count',
    text: 'Web application for paying invoices using UK open banking APIs.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://count.matts.now.sh',
      },
    ],
  },
  {
    title: 'N.A.S',
    text: 'Website for an aviation consultancy, specialising in flights into Antarctica.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://www.nascorporation.biz',
      },
    ],
  },

  {
    title: 'Hire Products',
    text: 'A Lambda build week project made with vanilla js, and less.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://airproducts.now.sh',
      },
    ],
  },
  {
    title: 'Training Platform',
    text: 'A training platform for ground handling staff in a Chilean airport.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://raaltraining2018.herokuapp.com',
      },
    ],
  },

];

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query imgQuery {
    now: file(absolutePath: { regex: "/now.png/" }) {
      ...fluidImage
    }
    alpacas: file(absolutePath: { regex: "/alpacas.png/" }) {
      ...fluidImage
    }
    wackJack: file(absolutePath: { regex: "/wack-jack.png/" }) {
      ...fluidImage
    }
    count: file(absolutePath: { regex: "/count.png/" }) {
      ...fluidImage
    }
    nas: file(absolutePath: { regex: "/nas.png/" }) {
      ...fluidImage
    }
    products: file(absolutePath: { regex: "/products.png/" }) {
      ...fluidImage
    }
    raal: file(absolutePath: { regex: "/raal.png/" }) {
      ...fluidImage
    }
  }
`;

function Projects() {
  const [active, setActive] = useState(0);

  const scrollListener = (e) => {
    const activeEl = Math.floor((e.target.scrollLeft + 125) / 250);
    setActive(activeEl);
  };

  const clickHandler = (index) => {
    setActive(index);

    const isMobile = window.innerWidth < 500;

    if (isMobile) {
      const cardsWrapper = document.getElementById('cards-wrapper');
      cardsWrapper.scrollTo({
        left: index * 250,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const isDesktop = window.innerWidth > 500;
    if (isDesktop) setActive(3);
  }, []);

  return (
    <StaticQuery
      query={pageQuery}
      render={(data) => {
        const dataArray = Object.values(data);

        return (
          <Container id="projects">
            <Heading>
              <h1>Recent Projects</h1>
            </Heading>
            <CardsWrapper id="cards-wrapper" onScroll={scrollListener}>
              <Cards active={active}>
                { cards.map((card, index) => (
                  <Card
                    key={card.title}
                    {...card}
                    img={dataArray[index].childImageSharp.fluid}
                    active={active === index}
                    clickHandler={clickHandler}
                    index={index}
                  />
                ))}
              </Cards>
            </CardsWrapper>
          </Container>
        );
      }}
    />
  );
}

export default Projects;
