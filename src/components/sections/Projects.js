import React from "react";
import styled from "styled-components";
import projects from "../../../content/projects";
import Icon from "../icons/icon";
import Image from "next/image";

const StyledProject = styled.div`
    background-color: var(--lighter-gray);
    margin-top: 20px;
    padding: 20px;
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

    .projects-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 25px;

        @media (max-width: 1080px) {
            flex-direction: column;
        }
    }
    .project-tech-list {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        list-style: none;

        @media (max-width: 1080px) {
            justify-content: center;
            width: 100%;
        }

        li {
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
            font-weight: 900;
            text-transform: uppercase;
            white-space: nowrap;
            margin-left: 10px;
            color: var(--gray);
            border-radius: var(--border-radius);
            background-color: var(--silver);
            padding: 5px 10px;

            @media (max-width: 1080px) {
                margin: 0;
            }
        }
    }
    .project-links {
        display: flex;
        align-items: center;
        flex: 0 0 68%;
        white-space: nowrap;
        a {
            ${({ theme }) => theme.mixins.flexCenter};
        }

        svg {
            padding-left: 5px;
            width: 25px;
            height: 25px;
        }
    }
    .project-link {
        ${({ theme }) => theme.mixins.smallButtonSecondary};
        border: 1px solid var(--blue);
        background-color: var(--blue);
        color: var(--white);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--dark-blue);

            & svg {
                transition: var(--transition);
                fill: var(--lighter-gray);
            }
        }
    }

    .project-link-alt {
        ${({ theme }) => theme.mixins.smallButtonSecondary};
        margin-left: 10px;
        &:hover,
        &:focus,
        &:active {
            color: #767676;
            background-color: #fcfcfc;

            & svg {
                transition: var(--transition);
                fill: #696969;
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
                                    <div className="projects-box">
                                        <div className="project-links">
                                            {extern && (
                                                <a
                                                    href={extern}
                                                    aria-label="External Link"
                                                    className="project-link">
                                                    View project
                                                    <Icon name="External" />
                                                </a>
                                            )}
                                            {github && (
                                                <a
                                                    href={github}
                                                    className="project-link-alt"
                                                    aria-label="GitHub Link">
                                                    Github
                                                    <Icon name="GitHub2" />
                                                </a>
                                            )}
                                        </div>

                                        {tech.length && (
                                            <ul className="project-tech-list">
                                                {tech.map((tech, i) => (
                                                    <li key={i}>{tech}</li>
                                                ))}
                                            </ul>
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
