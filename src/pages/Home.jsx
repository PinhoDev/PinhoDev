import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // motion aqui
import Contact from "../components/Contact";
import Profile from "../assets/images/MyPicture.jpg";

function Home() {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <MainContainer>
        <ProfileWrapper
          as={motion.div}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ProfileImg src={Profile} alt="Profile Picture" />
        </ProfileWrapper>
        <Article
          as={motion.article}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Paragraph>
            Greetings! I'm Andre Pinho, a passionate Android developer focused
            on crafting exceptional mobile experiences. Through my journey, I’ve
            cultivated strong skills and gained valuable experience that drive
            me to tackle challenges and build innovative solutions.
          </Paragraph>
          <Paragraph>
            Motivation, organization, and passion are my key drivers for success
            in any professional environment.
          </Paragraph>
          <Divider />
          <Contact />
        </Article>
      </MainContainer>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 20px;
`;

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  padding: 2rem 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileWrapper = styled.div`
  flex-shrink: 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProfileImg = styled.img`
  width: 260px;
  height: auto;
  display: block;
`;

const Article = styled.article`
  max-width: 700px;
  flex: 1;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.9;
  margin-bottom: 1.75rem;
  text-align: justify;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 2rem 0;
`;
