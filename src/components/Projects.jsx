import React, { useState } from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import Card from './Card';

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    overflow: hidden;
`;

const Cards = styled.div`
    display: flex; 
    justify-content: center;
    width: 150%;
    padding: 0 5%;
    transform: ${({active}) => `translateX(${-(active * 300 - 600)}px)`};
    transition: transform 420ms;
`;

const cards = [
    { title: 'One', src: '' },
    { title: 'Two', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552990006/portfolio/Screenshot_2019-03-19_at_10.06.23.png' },
    { title: 'Three', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552897944/portfolio/Screenshot_2019-03-18_at_08.32.09.png' },
    { title: 'Four', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552990038/portfolio/Screenshot_2019-03-19_at_10.06.54.png' },
    { title: 'Five', src: '' },
]

function Projects() {
    const [active, setActive] = useState(2);

    return (
        <Container>
           <h1>Projects</h1>
           <Cards 
           
           >
            { cards.map((card, index) => { 
                return <Card 
                    title={card.title} 
                    src={card.src}
                    active={active === index} 
                    setActive={setActive} 
                    index={index} 
                /> 
            })}
           </Cards>
        </Container>
    )
}

export default Projects;
