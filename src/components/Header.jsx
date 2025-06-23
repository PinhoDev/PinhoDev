import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      {/* Desktop Menu */}
      {!isMobile && (
        <DesktopMenu>
          <MenuLink as={Link} to="/">
            Home
          </MenuLink>
          <MenuLink as={Link} to="/about">
            About Me
          </MenuLink>
          <MenuLink as={Link} to="/projects">
            Projects
          </MenuLink>
        </DesktopMenu>
      )}

      {/* Mobile Menu Wrapper */}
      {isMobile && (
        <MenuWrapper>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <AnimatePresence>
            {isOpen && (
              <MobileMenu
                as={motion.div}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MenuLink as={Link} to="/" onClick={() => setIsOpen(false)}>
                  Home
                </MenuLink>
                <MenuLink
                  as={Link}
                  to="/about"
                  onClick={() => setIsOpen(false)}
                >
                  About Me
                </MenuLink>
                <MenuLink
                  as={Link}
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </MenuLink>
              </MobileMenu>
            )}
          </AnimatePresence>
        </MenuWrapper>
      )}
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: relative;
  background-color: rgba(17, 24, 39, 0.5);
  color: #f9fafb;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1000;
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

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 1100;

  span {
    height: 3px;
    width: 25px;
    background: #f9fafb;
    border-radius: 5px;
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const DesktopMenu = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(17, 24, 39, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0 0 16px 16px;
  min-width: 160px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuLink = styled(motion.a)`
  font-weight: 600;
  font-size: 1.25rem;
  text-decoration: none;
  color: #60a5fa;

  &:hover {
    color: #93c5fd;
  }
`;
