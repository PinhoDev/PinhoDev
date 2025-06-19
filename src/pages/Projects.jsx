import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import projects from "../data/ProjectsData";

function Projects() {
  return (
    <Container>
      <Title>My Projects</Title>
      <Subtitle>
        Highlighted projects built for both web and mobile platforms.
      </Subtitle>

      <Grid>
        {projects.map((project, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Image src={project.image} alt={project.title} />
            <Content>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Category>{project.category}</Category>
              <Description>{project.description}</Description>
              <Tags>
                {project.tools.map((tool, i) => (
                  <Tag key={i}>{tool}</Tag>
                ))}
              </Tags>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  padding: 4rem 2rem;
  min-height: 100vh;
  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  @media (prefers-color-scheme: dark) {
    color: #f3f4f6;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const Category = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #10b981;
  background-color: #d1fae5;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;

  @media (prefers-color-scheme: dark) {
    background-color: #065f46;
    color: #a7f3d0;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  @media (prefers-color-scheme: dark) {
    color: #f9fafb;
  }
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 0.95rem;
  margin-top: 0.5rem;
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;

  @media (prefers-color-scheme: dark) {
    background-color: #1e3a8a;
    color: #dbeafe;
  }
`;
