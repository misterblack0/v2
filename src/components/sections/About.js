import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--blue);
    padding: 100px 150px;

    @media (max-width: 1080px) {
        padding: 100px 100px;
    }
    @media (max-width: 768px) {
        padding: 50px 50px;
    }
    @media (max-width: 480px) {
        padding: 50px 25px;
    }

    .section-heading {
        color: var(--white);
    }

    .inner {
        color: var(--white);
        text-align: center;
        max-width: 700px;
    }
`;

const About = () => {
    return (
        <StyledAboutSection id="about">
            <h2 className="section-heading">Hi, I’m Marius. Nice to meet you.</h2>
            <div className="inner">
                <div>
                    <p>
                        My goal is to increase my value as a developer and to produce valuable work
                        which can help companies and individuals. I&apos;m interested in the entire
                        frontend spectrum and working on ambitious projects with positive people.
                    </p>
                </div>
            </div>
        </StyledAboutSection>
    );
};

export default About;
