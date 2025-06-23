import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>&copy; 2024 Andre Pinho - All Rights Reserved</p>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;
  background-color: rgba(17, 24, 39, 0.5);
`;
