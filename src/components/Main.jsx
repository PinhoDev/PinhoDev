import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import Profile from "../assets/images/MyPicture.jpg";

function Main() {
  return (
    <Container>
      <ProfileImg src={Profile} alt="Profile Picture" />
      <Article>
        <p>
          Greetings! I'm Andre Pinho, a passionate Android developer with a
          dedicated focus on crafting exceptional mobile experiences. In my
          journey through app development, I've honed solid skills and gathered
          valuable experience that propels me to overcome challenges and create
          innovative solutions.
        </p>
        <p>
          I firmly believe that motivation, organization, and passion are key
          drivers for success in any role.
        </p>
        <hr />
      </Article>
      <Contact />
    </Container>
  );
}

export default Main;

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
`;

const ProfileImg = styled.img`
  border-radius: 10px;
  width: 240px;
  height: auto;
`;

const Article = styled.article`
  flex: 1 1 300px;
  max-width: 600px;
  p {
    margin-bottom: 1.5rem;
    line-height: 2;
    font-size: 1.1rem;
    text-align: justify;
  }
  hr {
    margin-top: 1.5rem;
    border: none;
  }
`;
