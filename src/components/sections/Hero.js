import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { email } from "../../config";
import { navDelay, loaderDelay } from "../../utils/index";

const WideLayout = styled.div`
    max-width: 1600px;
    background: right 20px bottom 20px / 45% no-repeat url("hero.svg");

    @media (max-width: 1080px) {
        background: none;
    }
`;

const StyledHeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    ${({ theme }) => theme.mixins.padding};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    max-width: 1000px;

    h1 {
        color: var(--gray);
        margin: 0 0 30px 4px;
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h2 {
        margin-top: 10px;
        ${"" /* line-height: 0.9; */}
        color: #696969;
    }

    p {
        margin: 20px 0;
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

    const one = <h1>Hello, my name is</h1>;
    const two = <h2 className="big-heading">Marius Ciocoiu</h2>;
    const three = <h3 className="big-heading">I build stuff for the web</h3>;
    const four = (
        <p>
            I produce elegant, performant and accessible digital experiences. Think, build, launch,
            measure. <span>Repeat</span>.
        </p>
    );
    const five = (
        <a href={`mailto:${email}`} className="email-link">
            Get in touch
        </a>
    );

    const items = [one, two, three, four, five];

    return (
        <WideLayout>
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
        </WideLayout>
    );
};

export default Hero;
