import React from 'react'

import styled from 'styled-components'


const NavbarContainer = styled.div`
    background-color: rgba(0,0,0,0.3);
    color: white;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    display: none;
    position: fixed;
    bottom: 5em;
    left: 0;
    right: 0;
    margin: auto;
    width: max-content;
    padding: 1em;
    @media (max-width: 768px) 
    {
    display: block;
    }
`;
const Wrapper = styled.div`
    display: flex;
    gap: 1em;
`;
const Nav = styled.nav`

`;
const Ul = styled.ul`
    
`;

const Li = styled.li`
    float: left;
`;



const Navbar = () => {
    return (
        <NavbarContainer>
            <Wrapper>
                <Nav>
                    <Ul >
                        <Li>Home  .</Li>
                        <Li>About  .</Li>
                        <Li>Projects  .</Li>
                        <Li>Contact  .</Li>
                    </Ul>
                </Nav>
            </Wrapper>
        </NavbarContainer>
    )
}

export default Navbar