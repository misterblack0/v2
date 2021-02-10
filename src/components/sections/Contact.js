import React from "react";
import styled from "styled-components";
import { email } from "../../config";

const StyledContactSection = styled.section`
    max-width: 600px;
    margin: 0 auto 100px;
    text-align: center;
    @media (max-width: 768px) {
        margin: 0 auto 50px;
    }
    .title {
        font-size: clamp(20px, 5vw, 40px);
    }

    p {
        padding-top: 15px;
    }

    p span {
            color: var(--black);
        }
    }

    .email-link {
        ${({ theme }) => theme.mixins.bigButtonSecondary};
        margin-top: 50px;
    }
`;

const Contact = () => {
    return (
        <StyledContactSection id="contact">
            <h2 className="title">Do you like what you’re seeing? Let’s have a chat!</h2>

            <p>
                I&apos;m always looking to <span>expand</span> my network, get <span>engaged</span>{" "}
                in new challenges, or just have a <span>coffee</span>!
            </p>

            <a className="email-link" href={`mailto:${email}`}>
                Send me an email
            </a>
        </StyledContactSection>
    );
};

export default Contact;
