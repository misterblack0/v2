import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { navDelay } from "../src/utils/index";
import { Layout } from "../src/components/layout";

const StyledMainContainer = styled.main`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
`;

const StyledTitle = styled.h1`
    color: var(--blue);
    font-family: var(--font-mono);
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
`;

const StyledSubtitle = styled.h2`
    font-size: clamp(30px, 5vw, 50px);
    font-weight: 400;
`;

const StyledHomeButton = styled(Link)`
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 40px;
`;

const NotFoundPage = ({ location }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Layout location={location}>
            <Head>
                <title>Page Not Found | Marius Ciocoiu</title>
            </Head>

            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition timeout={500} classNames="fadeup">
                        <StyledMainContainer className="fillHeight">
                            <StyledTitle>404</StyledTitle>
                            <StyledSubtitle>Page Not Found</StyledSubtitle>
                            <StyledHomeButton href="/">Go Home</StyledHomeButton>
                        </StyledMainContainer>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </Layout>
    );
};

NotFoundPage.propTypes = {
    location: PropTypes.object.isRequired
};

export default NotFoundPage;
