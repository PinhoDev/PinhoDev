import React from "react";
import styled from "styled-components";
import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <CardContainer>
      <ImageWrapper>
        <ProjectImage src={project.image} alt={project.title} />
        {project.featured && <Badge>🌟 Destacado</Badge>}
      </ImageWrapper>

      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Category>{project.category}</Category>

        <Tags>
          {project.tools.map((tool, index) => (
            <Tag key={index}>{tool}</Tag>
          ))}
        </Tags>

        {project.demoUrl && (
          <DemoButton
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} style={{ marginRight: "0.5rem" }} />
            Demo
          </DemoButton>
        )}
      </Content>
    </CardContainer>
  );
}

export default ProjectCard;

const CardContainer = styled.div`
  overflow: hidden;
  color: white;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f43f5e;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: justify;
`;

const Category = styled.span`
  background-color: #065f46;
  color: #a7f3d0;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  width: fit-content;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

const DemoButton = styled.a`
  margin-top: 0.75rem;
  background-color: #7c3aed;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #6d28d9;
  }
`;
