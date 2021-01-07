import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '../../config';
/* import patternBg from 'next/image'; */

const Wrapper = styled.div`
  margin: 0 auto;
  margin: 0 auto;
  padding: 100px 0;
  max-width: 100vw;
  background: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--white);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h2 {
    color: var(--white);
  }
  h3 {
    margin-top: 10px;
    color: var(--white);
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 500px;
    color: var(--white);
  }
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Marius Ciocoiu.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <p>
      I'm a web developer based in Bucharest, specializing in building exceptional websites,
      applications, and everything in between.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <Wrapper>
      <StyledHeroSection>
        <TransitionGroup component={null}>
          {items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup">
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </StyledHeroSection>
    </Wrapper>
  );
};

export default Hero;
