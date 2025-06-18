import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Profile from "./assets/images/MyPicture.jpg";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <AboutMe />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  with: 100%;
  height: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  background-color: black;
  margin: 0 auto;
  padding: 2rem 1rem;
`;
