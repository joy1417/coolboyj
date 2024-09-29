import styled from 'styled-components';

export const AboutContainer = styled.div`
  text-align: center; /* Centers the text */
  padding: 20px; /* Adds padding around the content */
  max-width: 800px; /* Limits the width for better readability */
  margin: 0 auto; /* Centers the container */
`;

// Image styling
export const Image = styled.img`
  width: 320px; /* Adjust as needed */
  border-radius: 50%; /* Makes the image circular */
  margin: 20px 0; /* Spacing around the image */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow */
  height: 280px;
`;

// Container for skills section
export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  justify-content: center; /* Centers the skills horizontally */
  margin-top: 1rem; /* Space above skills section */
`;

// Individual skill item styling
export const SkillItem = styled.div`
  display: flex;
  flex-direction: column; /* Aligns image and text vertically */
  align-items: center; /* Centers the content within each skill item */
  margin: 10px; /* Increased gap between skill items for better spacing */
  padding: 15px; /* Padding within skill items */
  border: 1px solid ${({ theme }) => `${theme.text_primary}80`}; /* Optional border with opacity */
  border-radius: 8px; /* Rounded corners */
  background-color: ${({ theme }) => theme.card}; /* Background color */
  flex: 1 1 calc(30% - 20px); /* Adjusts width for responsiveness */
  box-sizing: border-box; /* Ensures padding and border are included in total width */

  @media (max-width: 768px) {
    flex: 1 1 calc(45% - 20px); /* Responsive layout for smaller screens */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* Stacks skill items on very small screens */
  }
`;

// Image styling within skill item
export const SkillImage = styled.img`
  width: 70px; /* Adjust size as necessary */
  height: 70px; /* Maintain aspect ratio */
  margin-bottom: 8px; /* Space between image and text */
`;
