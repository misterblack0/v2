import { css } from "styled-components";

const mixins = {
    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    smallButton: css`
        color: var(--green);
        background-color: var(--blue);
        color: var(--white);
        border-radius: var(--border-radius);
        padding: 0.75rem 1rem;
        font-size: var(--fz-xs);
        font-weight: 700;
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--darker-blue);
        }
        &:after {
            display: none !important;
        }
    `,

    bigButton: css`
        color: var(--light);
        background-color: var(--blue);
        border-radius: var(--border-radius);
        padding: 1.2rem 1.75rem;
        font-size: var(--fz-md);
        font-weight: 900;
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--darker-blue);
        }
        &:after {
            display: none !important;
        }
    `,

    boxShadow: css`
        box-shadow: 0 10px 30px -15px var(--shadow);
        transition: var(--transition);
        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px var(--shadow);
        }
    `,

    fancyList: css`
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: var(--fz-lg);
        li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 10px;
            &:before {
                content: "▹";
                position: absolute;
                left: 0;
            }
        }
    `
};

export default mixins;
