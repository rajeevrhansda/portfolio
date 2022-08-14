import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: fixed;
height: 100vh;
@media (max-width: 768px) 
    {
    display: none;
    }
`;
const LeftBar = styled.div`
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: space-between;

`;
const Logo = styled.h1`
    font-family: 'Indie Flower', cursive;
`;
const SocialMediaIcons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2em;
font-size: 1.6em;
::after {
    background: #4db5ff;
    content: "";
    height: 3rem;
    width: 2px;
}
`;
const Icon = styled.div`
background: transparent;

:hover{
    transform: scale(1.5);
    color:#4db5ff;
}

`;



const Left = () => {
    return (
        <Container>
            <LeftBar>
                <Logo>
                    &lt; R &frasl; &gt;
                </Logo>
                <SocialMediaIcons>
                    <Icon>
                        <i class="fa-brands fa-facebook-f"></i>
                    </Icon>
                    <Icon>
                        <i class="fa-brands fa-twitter"></i>
                    </Icon>
                    <Icon>
                        <i class="fa-brands fa-instagram"></i>
                    </Icon>
                    <Icon>
                        <i class="fa-brands fa-facebook-messenger"></i>
                    </Icon>
                    <Icon>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </Icon>
                    <Icon>
                        <i class="fa-brands fa-twitter"></i>
                    </Icon>
                    <Icon>
                        <i class="fa-solid fa-envelope"></i>
                    </Icon>
                    <Icon>
                        <i class="fa-brands fa-github"></i>
                    </Icon>
                </SocialMediaIcons>

            </LeftBar>
        </Container>
    )
}

export default Left