import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./TransitionStyles";

const GlobalStyle = createGlobalStyle`

  :root {
    --white: #fff;
    --blue: #358ed7;
    --dark-blue: #2a87d3;
    --darker-blue: #141c3a;
    --gray: gray;
    --dark-gray: #383838;
    --silver: #D3D3D3;
    --light-gray: #eeeeee;
    --lighter-gray: #f8f8f8;
    --shadow: gray;

    --font-sans: 'Montserrat', sans-serif;
    --font-mono: 'Inconsolata', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --border-radius: 3px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  
    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--dark-gray);
    color: var(--white);

  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--gray);
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
    font-weight: 500;
    line-height: 1.5;
   
    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  main {
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;

    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
    
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    ${"" /* line-height: 1.2; */}
    color: var(--dark-gray);
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 50px);
    font-weight: 700;
    color: var(--dark-gray);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .section-heading {
    color: var(--dark-gray);
    text-align: center;
    position: relative;
    margin: 10px 0 50px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    &:hover,
    &:focus {
      color: var(--dark-gray);
    }
  }
  
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  ${TransitionStyles};
`;

export default GlobalStyle;
