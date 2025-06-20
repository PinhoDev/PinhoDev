import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function SideMenu() {
  return (
    <MenuContainer
      as={motion.nav}
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
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
  );
}

export default SideMenu;

const MenuContainer = styled.nav`
  position: fixed;
  top: 220px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem 1.5rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 200;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.12);
`;

const MenuLink = styled(motion.a)`
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
