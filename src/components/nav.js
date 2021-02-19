import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import { navLinks } from "./../config";
import { loaderDelay } from "./../utils/index";
import useScrollDirection from "./../hooks/useScrollDirection";
import Menu from "./menu";

const StyledHeader = styled.header`
    ${({ theme }) => theme.mixins.flexBetween};
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    transition: var(--transition);
    ${(props) =>
        props.scrollDirection === "up" &&
        !props.scrolledToTop &&
        css`
            height: var(--nav-scroll-height);
            background-color: var(--white);
        `};
    ${(props) =>
        props.scrollDirection === "down" &&
        !props.scrolledToTop &&
        css`
            height: var(--nav-scroll-height);
            transform: translateY(calc(var(--nav-scroll-height) * -1));
        `};

    @media (max-width: 1080px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 25px;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--font-mono);
    z-index: 12;
`;

const StyledLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }

    ul {
        ${({ theme }) => theme.mixins.flexBetween};
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            margin: 0 5px;
            position: relative;
            font-size: var(--fz-md);
            font-weight: 700;
            color: gray;

            a {
                padding: 10px;
            }
        }
    }
    .resume-button {
        ${({ theme }) => theme.mixins.smallButton};
        margin-left: 15px;
        font-size: var(--fz-md);
    }
`;

const Nav = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);
    const scrollDirection = useScrollDirection("down");
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? "fade" : "";
    const fadeDownClass = isHome ? "fadedown" : "";

    return (
        <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <StyledNav>
                <StyledLinks>
                    <ul>
                        <TransitionGroup component={null}>
                            {isMounted &&
                                navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <CSSTransition
                                        key={i}
                                        classNames={fadeDownClass}
                                        timeout={timeout}>
                                        <li
                                            key={i}
                                            style={{
                                                transitionDelay: `${isHome ? i * 100 : 0}ms`
                                            }}>
                                            <Link href={url}>{name}</Link>
                                        </li>
                                    </CSSTransition>
                                ))}
                        </TransitionGroup>
                    </ul>

                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                                <div
                                    style={{
                                        transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`
                                    }}>
                                    <a
                                        className="resume-button"
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Resume
                                    </a>
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </StyledLinks>

                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={fadeClass} timeout={timeout}>
                            <Menu />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </StyledNav>
        </StyledHeader>
    );
};

Nav.propTypes = {
    isHome: PropTypes.bool
};

export default Nav;
