import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 1em;
justify-content: center;
gap: 1em;
color: ${({ theme }) => theme.text};
`;
const Icon = styled.div`
    :hover{
        padding: 1em;
        border-radius: 5px;
        border: 1px solid #4db5ff;
    color:#4db5ff;
}
`;


const Navigation = () => {
    return (
        <Container>
            <Icon>
                <a href="#google" style={{ color: "inherit" }}>
                    <i className="fa-solid fa-house" >Home</i>
                </a>
            </Icon>

            <Icon>
                <a href="#google" style={{ color: "inherit" }}>
                    <i className="fa-solid fa-house">About</i>
                </a>
            </Icon>

            <Icon>
                <a href="#google" style={{ color: "inherit" }}>
                    <i className="fa-solid fa-house">Services</i>
                </a>
            </Icon>

            <Icon>
                <a href="#google" style={{ color: "inherit" }}>
                    <i className="fa-solid fa-house">Project</i>
                </a>
            </Icon>

            <Icon>
                <a href="#google" style={{ color: "inherit" }}>
                    <i className="fa-solid fa-house">Contact</i>
                </a>
            </Icon>
        </Container>
    )
}

export default Navigation