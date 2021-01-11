import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
    max-width: 900px;
    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;
        @media (max-width: 768px) {
            display: block;
        }
    }
`;
const StyledText = styled.div`
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
                color: var(--green);
                font-size: var(--fz-sm);
                line-height: 12px;
            }
        }
    }
`;
const StyledPic = styled.div`
    position: relative;
    max-width: 300px;
    @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 70%;
    }
    .wrapper {
        ${({ theme }) => theme.mixins.boxShadow};
        display: block;
        position: relative;
        width: 100%;
        border-radius: var(--border-radius);
        background-color: var(--green);
        &:hover,
        &:focus {
            background: transparent;
            outline: 0;
            &:after {
                top: 15px;
                left: 15px;
            }
            .img {
                filter: none;
                mix-blend-mode: normal;
            }
        }
        .img {
            position: relative;
            border-radius: var(--border-radius);
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1);
            transition: var(--transition);
        }
        &:before,
        &:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: var(--border-radius);
            transition: var(--transition);
        }
        &:before {
            top: 0;
            left: 0;
            background-color: var(--navy);
            mix-blend-mode: screen;
        }
        &:after {
            border: 2px solid var(--green);
            top: 20px;
            left: 20px;
            z-index: -1;
        }
    }
`;

const About = () => {
    const skills = ["JavaScript (ES6+)", "HTML & (S)CSS", "React", "WordPress"];

    return (
        <StyledAboutSection id="about">
            <h2 className="section-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>Hello! I&apos;m Marius, a web developer based in Bucharest, Romania.</p>

                        <p>
                            I am a self-taught developer who is extremely passionate about web
                            development, linux, blockchain technology and finance.
                        </p>

                        <p>
                            My goal is to increase my value as a developer and to produce valuable
                            work which can help companies and individuals. I love learning and I
                            believe that our knowledge should have solid foundations. I think that
                            learning from different domains gives you original ideas, helps you
                            innovate and brings value in your life. I believe in living better with
                            less.
                        </p>

                        <p>Here are a few technologies I&apos;ve been working with recently:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">{/* Image */}</div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
