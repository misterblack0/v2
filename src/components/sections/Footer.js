import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    padding: 90px 20px 100px;
    background-color: var(--black);
    text-align: center;
`;

const Content = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;

    span {
        margin-bottom: 4px;
        color: #979797;
        font-size: 14px;
        line-height: 28px;
        letter-spacing: -0.2px;
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
            </Content>
        </StyledFooter>
    );
};

export default Footer;
