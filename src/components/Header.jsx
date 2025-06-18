import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Title>
        <h1>Andre De Pinho</h1>
        <h2>Frontend Developer</h2>
      </Title>
      <Nav>
        <a href="./index.html">Home</a>
        <a href="./aboutMe.html">About Me</a>
        <a href="./projects.html">Projects</a>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  text-align: left;
  margin-left: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
`;

const Title = styled.div`
  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: normal;
    margin: 0.5rem 0;
  }
`;

const Nav = styled.nav`
  margin-top: 1rem;
  margin-bottom: 1rem;
  a {
    margin: 1.5rem 1.5rem 0 0;
    text-decoration: none;
    color: #007acc;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;
