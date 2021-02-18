import React from "react";
import styled from "styled-components";
import { socialMedia } from "../../config";
import Icon from "./../icons/icon";
import { email } from "../../config";

const StyledFooter = styled.footer`
    width: 100%;
    margin-top: 100px;
    padding: 60px 20px 50px;
    background-color: var(--blue);
    color: var(--white);
    text-align: center;
`;

const Box = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 30px;

    .box {
        display: flex;
        align-items: center;
        border-radius: 12px;
        padding: 3rem 2rem;
        margin-top: -9rem;
        background-color: var(--darker-blue);
        box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px var(--darker-blue);

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .box-item {
        ${({ theme }) => theme.mixins.flexCenter};

        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        padding: 0.75rem;

        p {
            font-size: var(--fz-md);
            color: var(--white);
        }
    }

    .title {
        color: white;
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.125;
    }

    .email-link {
        ${({ theme }) => theme.mixins.bigButtonTertiary};
    }
`;

const Content = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;

    span {
        margin-bottom: 4px;
        color: var(--white);
        font-size: 14px;
        line-height: 28px;
        letter-spacing: -0.2px;
    }

    hr {
        height: 0;
        width: 100px;
        margin: 30px auto;
        border: 0;
        border-bottom: 2px solid var(--darker-blue);
    }

    p {
        font-size: var(--fz-sm);
        padding-top: 50px;
    }
`;

const StyledSocial = styled.div`
    display: flex;
    justify-content: center;

    a {
        svg {
            transition: var(--transition);
            height: 40px;
            width: 40px;
            fill: white;

            &:hover {
                fill: var(--darker-blue);
            }
            &:last-of-type {
                margin-left: 5px;
            }
        }
    }
`;
const Footer = () => {
    return (
        <StyledFooter>
            <Box>
                <div id="contact" className="box">
                    <div className="box-item">
                        <h1 className="title">Start a project</h1>
                    </div>
                    <div className="box-item">
                        <p>
                            Interested in working together? We should queue up a chat. I’ll buy the
                            coffee.
                        </p>
                    </div>
                    <div className="box-item">
                        <a href={`mailto:${email}`} className="email-link">
                            Let&apos;s do this
                        </a>
                    </div>
                </div>
            </Box>
            <Content>
                <span>
                    &quot;Out of clutter, find simplicity. From discord, find harmony. In the middle
                    of difficulty lies opportunity.&quot; - Albert Einstein
                </span>
                <hr />
                <StyledSocial>
                    {socialMedia &&
                        socialMedia.map(({ url, name }, i) => (
                            <div key={i}>
                                <a href={url} className="icon" aria-label={name}>
                                    <Icon name={name} />
                                </a>
                            </div>
                        ))}
                </StyledSocial>
                <p>&copy; {new Date().getFullYear()} Marius Ciocoiu</p>
            </Content>
        </StyledFooter>
    );
};

export default Footer;
