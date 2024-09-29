import React from 'react';
import { skills } from '../Home/data/constants'; 
import myImage from '../Home/images/Myimg2.jpg'; // Import the image
import {
  AboutContainer,
  Image,
  SkillsContainer,
  SkillItem,
  SkillImage
} from './AboutStyle'; // Import styled components


const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <Image src={myImage} alt="Myimg2" /> {/* Use the imported image */}
      <h2>Joy Gandhi</h2> 
      <p>
        I am a passionate web developer with experience in building responsive web applications.<br /> 
        I love learning new technologies and enhancing my skills.
      </p>
      <h2>Skills:</h2>
      <SkillsContainer>
        {skills.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <SkillsContainer>
              {section.skills.map((skill, i) => (
                <SkillItem key={i}>
                  <SkillImage src={skill.image} alt={skill.name} />
                  <b>{skill.name}</b>
                </SkillItem>
              ))}
            </SkillsContainer>
          </div>
        ))}
      </SkillsContainer>
    </AboutContainer>
  );
};

export default About;
