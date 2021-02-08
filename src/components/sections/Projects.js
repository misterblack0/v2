import React from "react";
import styled from "styled-components";
import projects from "../../../content/projects";
import Icon from "../icons/icon";
import Image from "next/image";

const StyledProject = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
       
              flex-direction: column;
            }
        .project-tech-list {
            
            justify-content: flex-end;
            li {
                margin: 0 0 5px 20px;
                @media (max-width: 768px) {
                    margin: 0 0 5px 10px;
                }
            }
        }
        .project-links {
            justify-content: flex-end;
            margin-right: -10px;
        }
        .project-image {
            @media (max-width: 768px) {
              
            }
        }
    }
    .project-content {
        padding-left: 70px;
        width: 50%;
        @media (max-width: 1080px) {
           
        }
        @media (max-width: 768px) {
            width: 100%;
            padding: 40px 40px 30px;
        }
        @media (max-width: 480px) {
            padding: 30px 25px 20px;
        }
    }

    .project-title {
        color: var(--black);
        font-size: clamp(24px, 5vw, 28px);
        @media (min-width: 768px) {
            
        }
        @media (max-width: 768px) {
            color: var(--dark);
        }
    }
    .project-description {
        font-size: var(--fz-md);
        @media (max-width: 768px) {
            padding: 20px 0;
        }
    }
    .project-tech-list {
        display: flex;
        flex-wrap: wrap;
        margin: 25px 0 10px;
        padding: 0;
        list-style: none;
        li {
            margin: 0 20px 5px 0;
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
            white-space: nowrap;
        }
        @media (max-width: 768px) {
            margin: 10px 0;
            li {
                margin: 0 10px 5px 0;
            }
        }
    }
    .project-links {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-left: -10px;

        a {
            ${({ theme }) => theme.mixins.flexCenter};
            padding: 10px;
            &.external {
                svg {
                    width: 22px;
                    height: 22px;
                    margin-top: -4px;
                }
            }
            svg {
                width: 22px;
                height: 22px; 
            }
        }
    }
    .project-image {
        width: 50%;
        @media (max-width: 768px) {
            
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
                                                <Icon name="GitHub" />
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
