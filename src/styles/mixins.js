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
        background-color: var(--blue);
        color: var(--white);
        border-radius: var(--border-radius);
        padding: 0.75rem 1rem;
        font-size: var(--fz-xs);
        font-weight: 700;
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        transition: var(--transition);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--dark-blue);
        }
    `,

    smallButtonSecondary: css`
        border-radius: var(--border-radius);
        padding: 0.4rem 0.6rem;
        font-size: var(--fz-xs);
        font-weight: 700;
        font-family: var(--font-mono);
        line-height: 1;
        text-transform: uppercase;
        text-decoration: none;
    `,

    bigButton: css`
        color: var(--white);
        background-color: var(--blue);
        border-radius: var(--border-radius);
        padding: 1.2rem 1.75rem;
        font-size: var(--fz-md);
        font-weight: 700;
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        transition: var(--transition);

        &:hover,
        &:focus,
        &:active {
            background-color: var(--dark-blue);
        }
    `,

    bigButtonTertiary: css`
        color: var(--white);
        background-color: transparent;
        border-radius: 30px;
        border: 2px solid var(--blue);
        padding: 1rem 2rem;
        font-size: var(--fz-lg);
        font-weight: 700;
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);

        &:hover,
        &:focus,
        &:active {
            background-color: var(--blue);
        }
    `,

    padding: css`
        padding: 0 150px;

        @media (max-width: 1080px) {
            padding: 0 100px;
        }
        @media (max-width: 768px) {
            padding: 0 50px;
        }
        @media (max-width: 480px) {
            padding: 0 25px;
        }
    `,

    boxShadow: css`
        box-shadow: 0 10px 30px -15px var(--shadow);
        transition: var(--transition);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px var(--shadow);
        }
    `
};

export default mixins;
