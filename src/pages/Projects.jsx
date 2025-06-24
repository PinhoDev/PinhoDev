import React from "react";
import styled from "styled-components";
import projects from "../data/ProjectsData";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <Container>
      <Title>My Projects</Title>
      <Subtitle>
        Highlighted projects built for both web and mobile platforms.
      </Subtitle>
      <MotionList
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projects.map((project, idx) => (
          <MotionCard
            key={project.id || idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard project={project} />
          </MotionCard>
        ))}
      </MotionList>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem;
  margin-top: 2rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const MotionList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MotionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;
