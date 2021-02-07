import React from "react";
import styled from "styled-components";
import { socialMedia } from "../../config";
import Icon from "./../icons/icon";

const StyledFooter = styled.footer`
    width: 100%;
    padding: 60px 20px 50px;
    background-color: var(--black);
    text-align: center;
`;

const Content = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;

    span {
        margin-bottom: 4px;
        color: var(--gray);
        font-size: 14px;
        line-height: 28px;
        letter-spacing: -0.2px;
    }

    hr {
        height: 0;
        width: 100px;
        margin: 30px auto;
        border: 0;
        border-bottom: 2px solid var(--dark-gray);
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
                fill: var(--blue);
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
