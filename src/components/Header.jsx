import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // motion aqui

function Header() {
  return (
    <Container
      as={motion.header}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title>
        <Name>Andre De Pinho</Name>
        <Role>Frontend Developer</Role>
      </Title>
      <Nav>
        <NavLink as={Link} to="/" whileHover={{ scale: 1.08 }}>
          Home
        </NavLink>
        <NavLink as={Link} to="/about" whileHover={{ scale: 1.08 }}>
          About Me
        </NavLink>
        <NavLink as={Link} to="/projects" whileHover={{ scale: 1.08 }}>
          Projects
        </NavLink>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  border-bottom: 1px solid #111827;
  box-shadow: 0 2px 6px rgba(10, 20, 40, 0.18);
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border-radius: 20px;
  position: relative;
  z-index: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 2.25rem;
  margin: 0;
  font-weight: 700;
`;

const Role = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 1rem 0 0 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

// Use motion for NavLink for hover animation
const NavLink = styled(motion.a)`
  font-weight: 500;
  font-size: 1.2rem;
  text-decoration: none;
  color: #007acc;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: #005f99;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #007acc;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
