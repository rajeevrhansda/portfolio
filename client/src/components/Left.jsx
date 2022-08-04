import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    @media (max-width: 768px) 
    {
    display: none;
    }
`;
const LeftBar = styled.div`
    display: flex;
`;
const Logo = styled.h1`
    font-family: 'Indie Flower', cursive;
`;
const SocialMediaIcons = styled.div`
    
`;


const Left = () => {
    return (
        <Container>
            <LeftBar>
                <Logo>
                    &lt; R &frasl; &gt;
                </Logo>
                <SocialMediaIcons>

                </SocialMediaIcons>

            </LeftBar>
        </Container>
    )
}

export default Left