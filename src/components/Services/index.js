import React from 'react';
import styled from 'styled-components';
import { servicesData } from '../Home/data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); // Adjust column width as needed
  gap: 10px; // This sets the gap for both rows and columns
  row-gap: 5px; // This specifically sets the gap between rows (upper and lower cards)
  column-gap: 20px; // This sets the gap between columns (side-by-side cards)
  max-width: 1200px;
  width: 100%;
`;


const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  text-align: center;
  height: 90%;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 55%;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const ServiceTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Services = () => {
  return (
    <Container>
      <Title>Services I Offer</Title>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Container>
  );
};

export default Services;
