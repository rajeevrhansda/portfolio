import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    bottom: 50%;
    right: 0;
    /* display: flex; */
    /* justify-content: center; */
    /* width: 100%; */
    @media (max-width: 768px) 
    {
    display: none;
    }
`;
const Wrapper = styled.div`
    /* width: 100%; */
    transform: rotate(-90deg);
`;


const Right = () => {
    return (
        <Container>
            <Wrapper>
                <pre>Home    About    Projects    Contact</pre>
            </Wrapper>
        </Container>
    )
}

export default Right