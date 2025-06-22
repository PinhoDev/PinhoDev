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
  padding: 2rem;
  margin-top: 2rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #f3f4f6;
`;

const Subtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #d1d5db;
`;

const MotionList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MotionCard = styled(motion.div)`
  background-color: rgba(17, 24, 39, 0.5);
`;
