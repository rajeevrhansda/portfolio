import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation';

const Container = styled.div`
position: fixed;
top: 40%;
right: 0;
transform: translateX(220px);
@media (max-width: 768px) 
    {
    display: none;
    }

`;
const Wrapper = styled.div`
transform: rotate(90deg);
display: flex;
gap: 1em;

`;


const Right = () => {
    return (
        <Container>
            <Wrapper>
                <Navigation />
            </Wrapper>
        </Container>
    )
}

export default Right