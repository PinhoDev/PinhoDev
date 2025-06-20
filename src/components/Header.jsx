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
      transition={{ duration: 1 }}
    >
      <Title>
        <Name>Andre De Pinho</Name>
        <Role>Frontend Developer</Role>
      </Title>
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
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0 0 20px 20px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
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
