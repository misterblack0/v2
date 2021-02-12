import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
    max-width: 900px;
`;
const StyledText = styled.div`
    text-align: center;
    ${
        "" /* 
    ul.skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        padding: 0;
        margin: 20px 0 0 0;
        overflow: hidden;
        list-style: none;
        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
            &:before {
                content: "▹";
                position: absolute;
                left: 0;
                color: var(--indigo);
                font-size: var(--fz-sm);
                line-height: 12px;
            }
        }
    }
     */
    }
`;

const About = () => {
    return (
        <StyledAboutSection id="about">
            <h2 className="section-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            My goal is to increase my value as a developer and to produce valuable
                            work which can help companies and individuals. I&apos;m interested in
                            the entire frontend spectrum and working on ambitious projects with
                            positive people.
                        </p>
                    </div>
                </StyledText>
            </div>
        </StyledAboutSection>
    );
};

export default About;
