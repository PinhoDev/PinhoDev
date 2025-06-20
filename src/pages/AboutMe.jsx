import React from "react";
import styled from "styled-components";
import { Code2, Lightbulb, Users, Coffee } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <Container>
      <Section>
        <ContainerBlock>
          <Grid>
            <MotionLeftCard
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Title>About Me</Title>
              <Paragraph>
                I'm Andre Pinho, a multifaceted professional who combines a
                passion for Android development with expertise in industrial
                engineering.
              </Paragraph>
              <Paragraph>
                App development is a dynamic and creative field where I thrive,
                dedicating myself to crafting exceptional mobile experiences. I
                also bring extensive experience in continuous improvement
                projects as a versatile Industrial Engineer.
              </Paragraph>
              <Paragraph>
                I'm prepared to bring a positive attitude, strong work ethic,
                and collaborative skills to contribute to your team's projects.
                Let's start this journey together!
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
                  I write maintainable and scalable code following best
                  practices.
                </p>
              </Card>
              <Card>
                <Icon>
                  <Lightbulb size={28} />
                </Icon>
                <h4>Innovation</h4>
                <p>
                  Always exploring new technologies and creative approaches.
                </p>
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
        </ContainerBlock>
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
  margin: 0 auto;
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

const ContainerBlock = styled.section`
  padding: 3rem 1.5rem;
  color: #f1f1f1;
  font-family: "Segoe UI", sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// Motion components
const MotionLeftCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;

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

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
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
`;

const SkillSection = styled.section`
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.05);
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
