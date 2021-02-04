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

    bigButton: css`
        color: var(--purple);
        background-color: var(--white);
        border-radius: var(--border-radius);
        padding: 1.25rem 1.75rem;
        font-size: var(--fz-sm);
        font-weight: 600;
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--light-gray);
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
