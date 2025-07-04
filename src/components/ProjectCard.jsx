import React from "react";
import styled from "styled-components";
import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <CardContainer>
      <ImageWrapper>
        <ProjectImage src={project.image} alt={project.title} />
        src={project.image || "/images/placeholder.jpg"}
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
  background: linear-gradient(145deg, #1e1b4b, #0f172a);
  border-radius: 2rem;
  overflow: hidden;
  width: 100%;
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  color: white;

  &:hover {
    transform: translateY(-5px);
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 1rem;
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #cbd5e1;
  text-align: justify;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s ease-in-out;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${CardContainer}:hover & {
    max-height: 200px;
    -webkit-line-clamp: unset;
  }
`;

const Category = styled.span`
  background-color: #10b981;
  color: #e0fce9;
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
  color: #f1f5f9;
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
