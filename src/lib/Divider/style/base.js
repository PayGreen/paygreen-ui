import { css } from 'styled-components';

const structureBase = css`
    display: flex;
    align-items: center;

    .shape {
        flex: 1;
    }
`;

const withText = css`
    @media ${props => props.theme.screen.max.md} {
        .shape {
            display: none;
        }
    }

    @media ${props => props.theme.screen.min.md} {
        ${structureBase};
    }
`;

const waveStyle = {
    left: css`
        &:last-child {
            transform: scale(-1, -1);
        }
    `,
    right: css`
        &:first-child {
            transform: scale(1, -1);
        }

        &:last-child {
            transform: scale(-1, 1);
        }
    `
};

const withWave = css`
    ${props => props.hasText ? withText : structureBase};

    span {
        max-width: ${props => props.theme.blockWidth.md};
        padding: 0 ${props => props.theme.space.sm};
        color: ${props => props.theme.color[props.colorTheme].main};
        opacity: .4;
    }

    .shape {
        fill: ${props => props.theme.color[props.colorTheme].main};
        opacity: .2;

        ${props => waveStyle[props.waveStyle]};
    }
`;

const noWave = css`
    position: relative;
    padding-top: ${props => props.theme.space.md};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: ${props => props.theme.line};
        width: ${props => props.theme.space.xl};
        background-color: ${props => props.theme.color[props.colorTheme].main};
        opacity: .4;
    }

    span {
        max-width: ${props => props.theme.blockWidth.xl};
        padding: 0 ${props => props.theme.space.sm};
        color: ${props => props.theme.wab.black00};
        opacity: .2;
    }
`;

export {
    withWave,
    noWave
};