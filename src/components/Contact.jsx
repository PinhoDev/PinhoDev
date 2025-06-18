import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Aside>
      <h3>Contact Me</h3>
      <ul>
        <li>
          <a href="tel:+4673081599">Mobil</a>
        </li>
        <li>
          <a href="mailto:andrepinho@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andre-de-pinho/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/PinhoDev">GitHub Page</a>
        </li>
      </ul>
    </Aside>
  );
}

export default Contact;

const Aside = styled.aside`
  h3 {
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 0.5rem;
    }
    a {
      color: #007acc;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
