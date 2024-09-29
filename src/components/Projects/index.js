import React from 'react';
import { projects } from '../Home/data/constants'; // Adjust the path to where your project data is stored
import { 
  Container, 
  Title, 
  ProjectsGrid, 
  ProjectCard, 
  ProjectImage, 
  ProjectTitle,  
  ProjectDescription, 
  ProjectDetails 
} from './ProjectsStyle'; // Ensure the path is correct

// Main Projects Component
const Projects = () => {
  return (
    <Container>
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectDetails>{project.outcome}</ProjectDetails>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;
