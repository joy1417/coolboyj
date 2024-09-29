import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
    HomeContainer, 
    HomeBg, 
    HomeLeftContainer, 
    Img, 
    HomeRightContainer, 
    HomeInnerContainer, 
    TextLoop, 
    Title, 
    Span, 
    SubTitle, 
    ResumeButton 
} from './Home';
import HomeImg from './images/Myimg.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from './data/constants';

const Home = () => {
    return (
        <div id="home">
            <HomeContainer>
                <HomeBg>
                    <HeroBgAnimation />
                </HomeBg>
                <HomeInnerContainer>
                    <HomeLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='_blank'>Check Resume</ResumeButton>
                    </HomeLeftContainer>
                    <HomeRightContainer id="Right">
                        <Img src={HomeImg} alt="HomeImg"/>
                    </HomeRightContainer>
                </HomeInnerContainer>
            </HomeContainer>
        </div>
    );
}

export default Home;
