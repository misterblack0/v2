import { React, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { email } from "../../config";
import { navDelay, loaderDelay } from "../../utils/index";

const StyledHeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    h1 {
        margin: 0 0 30px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-lg));
        font-weight: 400;
        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }
    h3 {
        margin-top: 10px;
        line-height: 0.9;
    }
    p {
        margin: 30px 0;
        max-width: 500px;
    }

    span {
        color: var(--black);
    }
    .email-link {
        ${({ theme }) => theme.mixins.bigButton};
    }
`;

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const one = <h2 className="big-heading">Marius Ciocoiu,</h2>;
    const two = <h3 className="big-heading">Front-end Developer</h3>;

    const three = (
        <p>
            Hi. I produce elegant, performant, and accessible digital experiences. Think, build,
            launch, measure. <span>Repeat</span>.
        </p>
    );
    const four = (
        <a href={`mailto:${email}`} className="email-link">
            Get in touch
        </a>
    );

    const items = [one, two, three, four];

    return (
        <StyledHeroSection>
            <TransitionGroup component={null}>
                {isMounted &&
                    items.map((item, i) => (
                        <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </StyledHeroSection>
    );
};

export default Hero;
