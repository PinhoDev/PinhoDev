import React from "react";
import styled from "styled-components";
import { Zap, ExternalLink, Code } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <CardContainer>
      <ImageWrapper>
        <ProjectImage src={project.image} alt={project.title} />
      </ImageWrapper>

      <Content>
        <TopRow>
          <Title>{project.title}</Title>
        </TopRow>

        <Description>{project.description}</Description>
        <Category>{project.category}</Category>

        <Tags>
          {project.tools.map((tool, index) => (
            <Tag key={index}>{tool}</Tag>
          ))}
        </Tags>
      </Content>
    </CardContainer>
  );
}

export default ProjectCard;

// Styled Components
const CardContainer = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: white;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const ImageWrapper = styled.div`
  flex: 1 1 320px;
  height: 380px;
  border-radius: 20px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Content = styled.div`
  flex: 1 1 400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e5e7eb;
`;

const Description = styled.p`
  color: #e5e7eb;
`;

const Category = styled.span`
  background-color: #065f46;
  color: #a7f3d0;
  font-size: 0.85rem;
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
  font-size: 0.8rem;
`;
