import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Section>
        <Title>About Me</Title>
        <TextBlock>
          <Paragraph>
            I'm Andre Pinho, a multifaceted professional who combines a passion
            for Android development with expertise in industrial engineering.
          </Paragraph>
          <Paragraph>
            App development is a dynamic and creative field where I thrive,
            dedicating myself to crafting exceptional mobile experiences. I also
            bring extensive experience in continuous improvement projects as a
            versatile Industrial Engineer.
          </Paragraph>
          <Paragraph>
            I'm prepared to bring a positive attitude, strong work ethic, and
            collaborative skills to contribute to your team's projects. Let's
            start this journey together!
          </Paragraph>
        </TextBlock>
      </Section>

      <SkillSection>
        <Title>Key Skills</Title>
        <List>
          <li>
            Frontend Developer – creating modern, scalable, and user-focused web
            and mobile applications.
          </li>

          <li>
            Lean Manufacturing & Continuous Improvement – process optimization
            and waste reduction.
          </li>
          <li>
            Leadership & Team Management – coordination across technical and
            operational teams.
          </li>
          <li>
            Debugging & Problem Solving – efficient resolution in both software
            and industrial contexts.
          </li>
          <li>
            Multilingual – fluent in Portuguese, Spanish, English, and Swedish.
          </li>
        </List>
      </SkillSection>

      <SkillSection>
        <Title>Technical Skills</Title>
        <List>
          <li>Languages: Kotlin, Java, JavaScript, Python, HTML, CSS.</li>
          <li>
            Frameworks & UI: Jetpack Compose, React.js, React Native, XML,
            Material UI, Bootstrap.
          </li>
          <li>
            Android Environments: Android Studio, IntelliJ IDEA, Kotlin
            Multiplatform.
          </li>
          <li>Architecture: MVVM, MVC, Clean Architecture, Context API.</li>
          <li>Networking: Retrofit, REST APIs.</li>
          <li>Databases: MySQL, SQLite, Room, MongoDB, Firestore.</li>
          <li>Backend: Node.js, Express.js.</li>
          <li>Testing: Unit, Integration, E2E (Jest, Testing Library).</li>
          <li>
            Cloud & APIs: Firebase (Auth, Firestore, Storage), Google Maps,
            Google Cloud.
          </li>
          <li>Tools: Git, GitHub, VS Code, Webpack, Vite.</li>
        </List>
      </SkillSection>
    </Container>
  );
}

export default About;

const Container = styled.section`
  max-width: 960px;
  margin: 4rem auto;
  padding: 2rem;
  color: white;
  border-radius: 20px;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
  color: #007acc;
  border-left: 4px solid #007acc;
  padding-left: 0.75rem;
`;

const TextBlock = styled.article`
  font-size: 1.125rem;
  line-height: 1.9;
  text-align: justify;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const SkillSection = styled.section`
  margin-bottom: 3rem;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.8;

  li {
    margin-bottom: 0.75rem;
  }
`;
