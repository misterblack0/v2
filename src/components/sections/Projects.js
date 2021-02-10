import React from "react";
import styled from "styled-components";
import projects from "../../../content/projects";
import Icon from "../icons/icon";
import Image from "next/image";

const StyledProject = styled.div`
    background-color: var(--lighter-gray);
    margin-top: 20px;
    padding: 10px;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;

    @media (max-width: 1080px) {
        flex-direction: column;
    }

    .project-content {
        margin-left: 70px;
        width: 50%;

        @media (max-width: 1080px) {
            margin: 0;
            padding-top: 30px;
            width: 75%;
        }
    }

    .project-title {
        color: var(--black);
        font-size: clamp(24px, 5vw, 28px);

        @media (max-width: 1080px) {
            text-align: center;
        }
    }
    .project-description {
        padding-top: 20px;
        font-size: var(--fz-md);

        @media (max-width: 1080px) {
            text-align: center;
        }
    }
    .project-tech-list {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin: 25px 0 10px;
        list-style: none;
        padding-left: 0;

        @media (max-width: 1080px) {
            justify-content: center;
        }

        li {
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
            white-space: nowrap;
            margin-left: 15px;
        }
    }
    .project-links {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;

        @media (max-width: 1080px) {
            justify-content: center;
        }
        a {
            margin-left: 10px;
        }
        svg {
            width: 28px;
            height: 28px;

            @media (max-width: 1080px) {
                width: 40px;
                height: 40px;
            }
        }
    }
    .project-image {
        width: 50%;
        @media (max-width: 1080px) {
            width: 85%;
        }
        .img {
            @media (max-width: 768px) {
                object-fit: cover;
                width: auto;
                height: 100%;
            }
        }
    }
`;

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-heading">Some Things I’ve Built</h2>
            <div>
                {projects &&
                    projects.map((project) => {
                        const { id, title, description, cover, extern, github, tech } = project;

                        return (
                            <StyledProject key={id}>
                                <div className="project-image">
                                    <Image
                                        className="img"
                                        src={cover}
                                        alt={title}
                                        layout="responsive"
                                        width={580}
                                        height={360}
                                        quality={100}
                                    />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{title}</h3>
                                    <div className="project-description">{description}</div>

                                    {tech.length && (
                                        <ul className="project-tech-list">
                                            {tech.map((tech, i) => (
                                                <li key={i}>{tech}</li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="project-links">
                                        {github && (
                                            <a href={github} aria-label="GitHub Link">
                                                <Icon name="GitHub2" />
                                            </a>
                                        )}
                                        {extern && (
                                            <a
                                                href={extern}
                                                aria-label="External Link"
                                                className="external">
                                                <Icon name="External" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </StyledProject>
                        );
                    })}
            </div>
        </section>
    );
};

export default Projects;
