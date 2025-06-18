import React from "react";
import styled from "styled-components";

function AboutMe() {
  return (
    <Container>
      <AboutMain>
        <TextBlock>
          <h3>ABOUT ME</h3>
          <p>
            I'm Andre Pinho, a multifaceted professional who combines a passion
            for Android development with expertise in industrial engineering.
          </p>
          <p>
            App development is a dynamic and creative field where I thrive,
            dedicating myself to crafting exceptional mobile experiences. I also
            bring extensive experience in continuous improvement projects as a
            versatile Industrial Engineer.
          </p>
          <p>
            I'm prepared to bring a positive attitude, strong work ethic, and
            collaborative skills to contribute to your team's projects. Let's
            start this journey together!
          </p>
        </TextBlock>
      </AboutMain>
      <SkillSection>
        <h3>KEY SKILLS</h3>
        <ul>
          <li>
            Proficient in Android Development, I craft intuitive mobile
            applications.
          </li>
          <li>
            Lean Manufacturing principles guide my approach, ensuring efficiency
            and waste reduction.
          </li>
          <li>
            Leadership & Organization are my strengths, directing teams with
            precision.
          </li>
          <li>
            Adept at Debugging & Problem Solving, I navigate challenges
            seamlessly.
          </li>
          <li>
            Multilingual in Portuguese, Spanish, English, and Swedish, I
            communicate effortlessly across diverse contexts.
          </li>
        </ul>
      </SkillSection>

      <SkillSection>
        <h3>TECHNICAL SKILLS</h3>
        <ul>
          <li>
            Android Development Environments (IntelliJ IDEA, Android Studio and
            Kotlin Multiplatform).
          </li>
          <li>Programming Languages (Java, Kotlin, and Python).</li>
          <li>UI Frameworks (XML and Jetpack Compose).</li>
          <li>
            Networking and Connectivity (Retrofit for consuming web services).
          </li>
          <li>Databases MySQL, SQLite, and Room Database.</li>
          <li>Version Control (Git and GitHub).</li>
          <li>Google APIs (Google Maps, Google Cloud and Firebase).</li>
          <li>Testing and Debugging & Dependency Injection.</li>
        </ul>
      </SkillSection>
    </Container>
  );
}

export default AboutMe;

const Container = styled.section`
  max-width: 960px;
  margin: 3rem auto;
  padding: 0 1rem;
  color: white;
`;

const AboutMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }
`;

const TextBlock = styled.article`
  flex: 1 1 300px;
  font-size: 1.1rem;
  line-height: 2;
  text-align: justify;
  border-bottom: 2px solid white;

  p {
    margin-bottom: 1rem;
  }
`;

const SkillSection = styled.section`
  margin-top: 3rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem;
    line-height: 1.5;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
