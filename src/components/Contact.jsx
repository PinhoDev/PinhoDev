import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactBox>
      <Title>Contact Me</Title>
      <List>
        <Item>
          <ContactLink href="tel:+4673081599">📱 +46 730 81 59 99</ContactLink>
        </Item>
        <Item>
          <ContactLink href="mailto:andrepinho@gmail.com">
            📧 andrepinho@gmail.com
          </ContactLink>
        </Item>
        <Item>
          <ContactLink
            href="https://www.linkedin.com/in/andre-de-pinho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn Profile
          </ContactLink>
        </Item>
        <Item>
          <ContactLink
            href="https://github.com/PinhoDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub Page
          </ContactLink>
        </Item>
      </List>
    </ContactBox>
  );
}

export default Contact;

// Estilos

const ContactBox = styled.aside`
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #007acc;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #005f99;
    text-decoration: underline;
  }
`;
