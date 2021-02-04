import React from "react";
import styled from "styled-components";
import { email } from "../../config";

const StyledFooterSection = styled.footer`
    position: relative;
    height: 516px;
    padding: 192px 0 0;
    background-image: linear-gradient(to bottom right, #c04de2, #340c7f);

    @media (min-width: 768px) {
        height: 628px;
        padding: 280px 0 0;
    }
    @media (min-width: 1200px) {
        height: 900px;
        padding: 436px 0 0;
    }
`;

const FooterBg = styled.div`
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1340px;

    @media (min-width: 1200px) {
        width: 1920px;
    }

    .footer-pattern-bg__default {
        display: block;
        width: 100%;
        @media (min-width: 2560px) {
            display: none;
        }
    }
    .footer-pattern-bg__large {
        display: none;
        @media (min-width: 2560px) {
            display: block;
            width: 100%;
        }
    }
`;

const FooterWhiteMask = styled.div`
    position: absolute;
    z-index: 1;
    top: -8px;
    left: 50%;
    width: 727px;
    transform: translateX(-50%);

    @media (min-width: 768px) {
        top: -14px;
        width: 1340px;
    }
    @media (min-width: 1200px) {
        top: -20px;
        width: 1920px;
    }
    .footer-white-mask__default {
        display: block;
        width: 100%;
        @media (min-width: 2560px) {
            display: none;
        }
    }
    .footer-white-mask__large {
        display: none;
        @media (min-width: 2560px) {
            display: block;
            width: 100%;
        }
    }
`;

const StyledContainerSection = styled.section`
    position: relative;
    z-index: 2;
`;

const StyledContainer = styled.div`
    text-align: center;
    width: 100%;
    padding: 0 1.5rem;
    margin: 0 auto;

    @media (min-width: 576px) {
        max-width: calc(100% - 50px);
    }
    @media (min-width: 992px) {
        max-width: calc(100% - 90px);
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    p {
        color: var(--white);
        margin: 2rem 0;
        line-height: 2rem;
    }

    .title {
        color: var(--white);
        font-size: clamp(40px, 5vw, 60px);
    }
    .email-link {
        ${({ theme }) => theme.mixins.bigButton};
    }
`;

const Footer = () => {
    return (
        <StyledFooterSection>
            <FooterBg>
                <div>
                    <img
                        className="footer-pattern-bg__default"
                        src="/footer-pattern-bg.png"
                        alt="footer-pattern-bg"
                    />
                    <img
                        className="footer-pattern-bg__large"
                        src="/footer-pattern-bg-lg.png"
                        alt="footer-pattern-bg-lg"
                    />
                </div>
            </FooterBg>

            <FooterWhiteMask>
                <img
                    className="footer-white-mask__default"
                    src="/footer-white-mask.png"
                    alt="footer-white-mask"
                />
                <img
                    className="footer-white-mask__large"
                    src="/footer-pattern-bg-lg.png"
                    alt="footer-pattern-bg-lg"
                />
            </FooterWhiteMask>

            <StyledContainerSection id="contact">
                <StyledContainer>
                    <h2 className="title">Get In Touch</h2>

                    <p>
                        I&apos;m currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to
                        get back to you!
                    </p>

                    <a className="email-link" href={`mailto:${email}`}>
                        Say Hello
                    </a>
                </StyledContainer>
            </StyledContainerSection>
        </StyledFooterSection>
    );
};

export default Footer;
