import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;
    z-index: 1;
`;

const StyledCredit = styled.div`
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1;
    a {
        padding: 10px;
    }
`;

const Footer = () => (
    <StyledFooter>
        <StyledCredit tabindex="-1">
            <a href="https://github.com/misterblack0/v2">
                <div>Built by Marius C.</div>
            </a>
        </StyledCredit>
    </StyledFooter>
);

export default Footer;
