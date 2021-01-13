import React from "react";
import styled from "styled-components";
import Image from "next/image";

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
                color: var(--indigo);
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
        &:hover,
        &:focus {
            &:after {
                top: 15px;
                left: 15px;
            }
        }
        .img {
            border-radius: var(--border-radius);
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
            background-color: var(--purple);
        }
        &:after {
            border: 2px solid var(--purple);
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
                        <p>
                            My goal is to increase my value as a developer and to produce valuable
                            work which can help companies and individuals. I&apos;m interested in
                            the entire frontend spectrum and working on ambitious projects with
                            positive people.
                        </p>
                        <p>
                            I love learning and I believe that our knowledge should have solid
                            foundations. I am of the opinion that learning from different domains
                            gives you original ideas, helps you innovate and brings value in your
                            life.
                        </p>
                        <p>I believe in living better with less.</p>

                        <p>Here are a few technologies I&apos;ve been working with recently:</p>
                    </div>

                    <ul className="skills-list">
                        {skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <Image
                            className="img"
                            src="/test.jpg"
                            alt="avatar"
                            layout="responsive"
                            width={315}
                            height={355}
                            quality={100}
                        />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
