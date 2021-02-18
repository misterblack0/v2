import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Nav from "./nav";
import Footer from "./sections/Footer";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({ children }) => {
    // Sets target="_blank" rel="noopener noreferrer" on external links
    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll("a"));
        if (allLinks.length > 0) {
            allLinks.forEach((link) => {
                if (link.host !== window.location.host) {
                    link.setAttribute("rel", "noopener noreferrer");
                    link.setAttribute("target", "_blank");
                }
            });
        }
    };

    useEffect(() => {
        handleExternalLinks();
    }, []);

    return (
        <>
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <StyledContent>
                        <Nav />
                        {children}
                        <Footer />
                    </StyledContent>
                </ThemeProvider>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
