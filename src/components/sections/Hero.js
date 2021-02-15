import { React, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { email } from "../../config";
import { navDelay, loaderDelay } from "../../utils/index";

const StyledHeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 90vh;
    ${"" /* background: center / contain no-repeat url("test.svg"); */}

    h2 {
        margin-top: 10px;
        line-height: 0.9;
    }
    p {
        margin: 30px 0;
        max-width: 500px;
    }
    span {
        color: var(--darker-blue);
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

    const one = <h1 className="big-heading">Marius Ciocoiu,</h1>;
    const two = <h2 className="big-heading">Front-end Developer</h2>;

    const three = (
        <p>
            Hi. I produce elegant, performant and accessible digital experiences. Think, build,
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
