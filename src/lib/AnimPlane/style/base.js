import { css, keyframes } from 'styled-components';

const dotsDelay = 0.05;

function dotsTransitions(count) {
    var styles = '';

    for (let i = 1; i < count; i++) {
        styles += `
            &:nth-of-type(${i + 1}) {
                transition-delay: ${i * dotsDelay}s;
            }
        `
    }

    return styles;
}

const planeAnimation = keyframes`
    6% {
        transform: translate(-5%, 10%);
    }

    14% {
        transform: translate(70%, -50%) scale(0.6);
    }

    15%,
    30% {
        transform: translate(30%, -90%) scale(0.4, -0.4) rotate3d(0.4, 0.4, 1, -90deg);
    }

    38% {
        transform: translate(0%, -60%) scale(0.4, -0.4) rotate3d(0.4, 0.4, 1, -93deg);
    }

    46% {
        transform: translate(-30%, -30%) scale(0.4, -0.4) rotate3d(0.4, 0.4, 1, -96deg);
    }

    54% {
        transform: translate(-60%, 0) scale(0.4, -0.4) rotate3d(0.4, 0.4, 1, -100deg);
    }

    55% {
        transform: translate(-70%, 80%) scale(0.4, 0.4);
    }

    56%,
    75% {
        transform: translate(-40%, 80%) scale(0.4, 0.4);
    }

    to {
        transform: translate(10%, -60%) scale(0.4, 0.4) rotate(-10deg);
    }
`;

const activeStyle = css`
    svg {
        .plane {
            animation-name: ${planeAnimation};
        }
    }
`;

export {
    dotsDelay,
    dotsTransitions,
    activeStyle
};
