import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function SideMenu() {
  return (
    <>
      {/* Slide-in Side Menu */}
      <AnimatePresence>
        (
        <MenuContainer
          as={motion.nav}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.4 }}
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
        )
      </AnimatePresence>
    </>
  );
}

export default SideMenu;

const MenuContainer = styled.nav`
  position: sticky;
  top: 180px;
  left: 20px;
  width: 150px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 250;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const MenuLink = styled(motion.a)`
  font-weight: 600;
  font-size: 1.3rem;
  text-decoration: none;
  color: #007acc;
  transition: color 0.2s ease;
  position: relative;

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
