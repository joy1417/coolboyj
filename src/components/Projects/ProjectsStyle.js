import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
`;

export const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); /* Adjust column width as needed */
  gap: 10px; /* Gap for both rows and columns */
  row-gap: 5px; /* Gap between rows */
  column-gap: 20px; /* Gap between columns */
  max-width: 1200px;
  width: 100%;
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.card}; 
  border-radius: 12px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  text-align: center;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center content */
  height: 100%; /* Maintain a percentage height */
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 50%; 
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text_primary}; /* Use theme for text color */
  font-size: 24px; /* Adjust font size */
  margin-bottom: 8px;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary}; /* Use theme for text color */
  margin: 0;
`;

export const ProjectDetails = styled.p`
  margin: 10px 0;
  color: white; /* Optional: Change text color for better visibility */
`;
