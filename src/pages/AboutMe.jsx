import React from "react";
import styled from "styled-components";
import { Code2, Lightbulb, Users, Coffee } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <Container>
      <Section>
        <Grid>
          <MotionLeftCard
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Title>About Me</Title>
            <Paragraph>
              I'm Andre De Pinho, a front-end and mobile developer with a
              background in industrial engineering. My career has taken me from
              process improvement and efficiency optimization to building
              responsive and intuitive digital products.
            </Paragraph>
            <Paragraph>
              Curious by nature and adaptable through experience, I thrive in
              collaborative environments that foster innovation and continuous
              learning. I enjoy turning complex ideas into clear and engaging
              user interfaces.
            </Paragraph>
            <Paragraph>
              Currently based in Sweden, I speak Portuguese, English, Spanish,
              and Swedish, and I enjoy working with multicultural teams across
              different countries and industries.
            </Paragraph>
            <Paragraph>
              Let’s build meaningful digital products together.
            </Paragraph>
          </MotionLeftCard>

          <MotionRightCards
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Card>
              <Icon>
                <Code2 size={28} />
              </Icon>
              <h4>Clean Code</h4>
              <p>
                I write maintainable and scalable code following best practices.
              </p>
            </Card>
            <Card>
              <Icon>
                <Lightbulb size={28} />
              </Icon>
              <h4>Innovation</h4>
              <p>Always exploring new technologies and creative approaches.</p>
            </Card>
            <Card>
              <Icon>
                <Users size={28} />
              </Icon>
              <h4>Collaboration</h4>
              <p>I work effectively in multidisciplinary teams.</p>
            </Card>
            <Card>
              <Icon>
                <Coffee size={28} />
              </Icon>
              <h4>Dedication</h4>
              <p>Committed to excellence in every project.</p>
            </Card>
          </MotionRightCards>
        </Grid>
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

const Container = styled.div`
  margin: auto;
  padding: 2.5rem;
  margin-top: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 769px) {
    padding: 1rem;
  }
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MotionLeftCard = styled(motion.div)`
  background-color: rgba(17, 24, 39, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 2rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.25rem;
    color: white;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1.25rem;
    line-height: 1.8;
  }
`;

const MotionRightCards = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  padding: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: rgba(17, 24, 39, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: left;

  h4 {
    margin-top: 0.75rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #ccc;
  }
`;

const Icon = styled.div`
  color: #3ea6ff;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  text-align: justify;
`;

const SkillSection = styled.section`
  background-color: rgba(17, 24, 39, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-bottom: 3rem;
  padding: 2rem;
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
