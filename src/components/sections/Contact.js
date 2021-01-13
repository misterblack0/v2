import React from "react";
import styled from "styled-components";
import { email } from "../../config";
import Image from "next/image";

const Wrapper = styled.div`
    background: linear-gradient(to bottom right, #c04de2, #340c7f);
    position: relative;
    height: 85vh;
`;

const BgPattern = styled(Image)`
    z-index: 5;
`;

const StyledContactSection = styled.section`
    max-width: 600px;
    margin: 0 auto 100px;
    text-align: center;
    position: relative;
    z-index: 10;
    @media (max-width: 768px) {
        margin: 0 auto 50px;
    }
    p {
        color: var(--white);
    }
    .title {
        color: var(--white);
        font-size: clamp(40px, 5vw, 60px);
    }
    .email-link {
        ${({ theme }) => theme.mixins.bigButton};
        margin-top: 50px;
    }
`;

const Contact = () => {
    return (
        <Wrapper>
            <Image
                src="/footer-white-mask.png"
                alt="footer-white-mask"
                layout="responsive"
                width={1920}
                height={369}
                quality={100}
            />
            <StyledContactSection id="contact">
                <h2 className="title">Get In Touch</h2>

                <p>
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get
                    back to you!
                </p>

                <a className="email-link" href={`mailto:${email}`}>
                    Say Hello
                </a>
            </StyledContactSection>
            <BgPattern
                src="/footer-pattern-bg.png"
                alt="background-pattern"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </Wrapper>
    );
};

export default Contact;
