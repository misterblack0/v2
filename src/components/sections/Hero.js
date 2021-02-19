import { React, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { email } from "../../config";
import { navDelay, loaderDelay } from "../../utils/index";

const WideLayout = styled.div`
    max-width: 1600px;
    background: right 20px bottom 20px / 45% no-repeat url("hero.svg");

    @media (max-width: 1080px) {
        background: right 10px bottom 70px / 45% no-repeat url("hero.svg");
    }
`;

const StyledHeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    ${({ theme }) => theme.mixins.padding};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    max-width: 1000px;
    ${
        "" /* 
    @media (max-width: 1080px) {
        padding-top: 200px;
    }
    @media (max-width: 768px) {
        padding-top: 150px;
    }
    @media (max-width: 480px) {
        padding-top: 125px;
    }
 */
    }
    h1 {
        color: var(--gray);
        font-size: var(--fz-lg);
    }

    h2 {
        margin-top: 10px;
        line-height: 0.9;
        color: #696969;
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

    const one = <h1>Hello, my name is</h1>;
    const two = <h2 className="big-heading">Marius Ciocoiu</h2>;
    const three = <h3 className="big-heading">I build things for the web.</h3>;
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
