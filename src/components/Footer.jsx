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
  padding-top: 1rem;
  border-top: 1px solid #eee;
  font-size: 0.9rem;
  color: white;
  border-radius: 0 0 20px 20px;
  margin-bottom: 2rem;
`;
