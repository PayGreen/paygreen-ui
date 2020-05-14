import { transparentize } from 'polished';

const backgroundColor = {
    theme: props =>
        transparentize(0.7, props.theme.color[props.colorTheme].main),
    wab: props => props.theme.wab[props.colorWab],
    status: props =>
        transparentize(0.7, props.theme.color.status[props.colorStatus].main),
};

export { backgroundColor };


const gradientStyle = css`
        background-image: linear-gradient(
            to left,
            ${props =>
                    transparentize(
                        0.8,
                        props.theme.color[props.colorTheme].gradientShade,
                    )}
                30%,
            ${props =>
                    transparentize(
                        0.7,
                        props.theme.color[props.colorTheme].gradientBase,
                    )}
                80%
        );
`;

const hoverStyle = {
    soft: css`
        &::after {
            height: 100%;
            opacity: 0;
            background-color: ${props => props.colorPallet === 'wab' || props.colorPallet === 'status' ? 
            backgroundColor[props.colorPallet] : null };

             ${props => props.colorPallet === 'theme' ? 
             gradientStyle: null }


            transition: all ${props => props.theme.transition.lg};
        }

        a:hover &,
        a:active &,
        a:focus & {
            &::after {
                opacity: 0.3;
                transition: all ${props => props.theme.transition.lg};
            }
        }
    `,
    classic: css`
        &::after {
            height: ${props => props.hasUnderline ? props.theme.line : 0};
            opacity: 0.3;
            background-color: ${props =>
                props.colorType === colorTypeOptions.reverse
                    ? props.theme.wab.white00
                    : mainColor[props.colorPallet]};
            transition: all ${props => props.theme.transition.xs};
        }
        a:hover &,
        a:active &,
        a:focus & {
            &::after {
                height: 100%;
                transition: all ${props => props.theme.transition.xs};
            }
        }
    `,
};