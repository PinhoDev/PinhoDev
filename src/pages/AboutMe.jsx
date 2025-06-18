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
          <li>Android Development – intuitive mobile app creation.</li>
          <li>Lean Manufacturing – focus on efficiency and waste reduction.</li>
          <li>Leadership & Organization – team direction with precision.</li>
          <li>Debugging & Problem Solving – agile issue resolution.</li>
          <li>
            Multilingual – fluent in Portuguese, Spanish, English & Swedish.
          </li>
        </List>
      </SkillSection>

      <SkillSection>
        <Title>Technical Skills</Title>
        <List>
          <li>
            Android Dev Environments (IntelliJ IDEA, Android Studio, Kotlin
            Multiplatform).
          </li>
          <li>Languages: Java, Kotlin, Python.</li>
          <li>UI: XML, Jetpack Compose.</li>
          <li>Networking: Retrofit for web services.</li>
          <li>Databases: MySQL, SQLite, Room Database.</li>
          <li>Version Control: Git & GitHub.</li>
          <li>Google APIs: Maps, Cloud, Firebase.</li>
          <li>Testing, Debugging, Dependency Injection.</li>
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
