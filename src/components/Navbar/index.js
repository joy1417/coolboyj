import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyleComponent.js';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../Home/data/constants.js';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '../Home/images/Jglogo.jpg';


const Navbar = () => {
  console.log(Bio);
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
        <img src={LogoImage} alt="Logo" />
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
              <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink as={Link} to="/home">Home</NavLink>
          <NavLink as={Link} to="/about">About</NavLink>
          <NavLink as={Link} to="/services">Services</NavLink>
          <NavLink as={Link} to="/projects">Projects</NavLink>
          <NavLink as={Link} to="/contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink as={Link} to="/about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink as={Link} to="/services" onClick={() => setIsOpen(false)}>Services</MobileLink>
            <MobileLink as={Link} to="/projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink as={Link} to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
