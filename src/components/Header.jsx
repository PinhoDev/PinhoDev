import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  return (
    <Container
      as={motion.header}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left: Title */}
      <Title>
        <Name>Andre De Pinho</Name>
        <Role>Frontend Developer</Role>
      </Title>

      {/* Right: Menu */}
      <AnimatePresence>
        <MenuContainer
          as={motion.nav}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 80, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MenuLink as={Link} to="/" whileHover={{ scale: 1.08 }}>
            Home
          </MenuLink>
          <MenuLink as={Link} to="/about" whileHover={{ scale: 1.08 }}>
            About Me
          </MenuLink>
          <MenuLink as={Link} to="/projects" whileHover={{ scale: 1.08 }}>
            Projects
          </MenuLink>
        </MenuContainer>
      </AnimatePresence>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: relative;
  top: 0;
  background-color: rgba(17, 24, 39, 0.6);
  color: #f9fafb;
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0 0 20px 20px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.h1`
  font-size: 2.75rem;
  font-weight: 900;
  margin: 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const Role = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: #d1d5db;
  letter-spacing: 0.5px;
`;

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

const MenuLink = styled(motion.a)`
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  color: #007acc;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: #60a5fa;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #60a5fa;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
