import React, { useState } from "react";
import styled from "styled-components";
import projects from "../data/ProjectsData";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { handleInputChange } from "../ViewController";
import { handleFormSubmit } from "../ViewController";

function Projects() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    handleInputChange(e, setFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleFormSubmit(formData, setFormData, setShowMessage);
  };

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

      <FormSection>
        <FormTitle>Request Access to My Code</FormTitle>

        <FormSubtitle>
          Interested in knowing more or seeing the code? Send a quick message!
        </FormSubtitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton
            type="submit"
            disabled={!formData.name || !formData.email || !formData.message}
          >
            Send Request
          </SubmitButton>{" "}
        </Form>
        {showMessage && (
          <SuccessMessage>
            ✅ Thank you! I will get back to you shortly.
          </SuccessMessage>
        )}
      </FormSection>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 769px) {
    padding: 1rem;
  }
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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  /* Large tablets and small desktops */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
  }

  /* Medium tablets */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  /* Small tablets and large phones */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const MotionCard = styled(motion.div)``;

const FormSection = styled.section`
  background-color: rgba(17, 24, 39, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  margin-top: 4rem;
  padding: 2rem;
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const FormSubtitle = styled.p`
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 2rem;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: inherit;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 2rem;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: inherit;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background: linear-gradient(145deg, #1e1b4b, #0f172a);
  color: #fff;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-family: inherit;
  font-weight: inherit;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: linear-gradient(145deg, #2563eb, #1e40af);
    transform: translateY(-2px);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const SuccessMessage = styled.p`
  background: linear-gradient(145deg, #1e1b4b, #0f172a);
  padding: 1rem;
  border-radius: 2rem;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-family: inherit;
  font-weight: inherit;
`;
