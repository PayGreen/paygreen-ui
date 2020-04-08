import styled from 'styled-components';

const AnimPlaneBase = styled.div`
    svg {
        fill: ${props => props.theme.color[props.colorTheme].main};

        .normal {
            opacity: 0.4;
        }

        .light {
            opacity: 0.2;
        }

        .dots {
            opacity: 0.4;
        }
    }
`;

export { AnimPlaneBase };
