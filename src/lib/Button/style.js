import styled, { css } from 'styled-components';

const ButtonBase = styled.a.attrs(props => ({
    color: props.color || props.theme.color.primary.main,
    size: props.size || 'md'
}))`
    display: inline-block;
    position: relative;
    outline: none;
    cursor: ${props => props.type == 'disabled' ? 'not-allowed' : 'pointer'};
    text-transform: uppercase;
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.button.font[props.size]};
    letter-spacing: ${props => props.theme.button.letterSpacing[props.size]};
    padding: ${props => props.theme.button.paddingHeight[props.size]} ${props => props.theme.button.paddingWidth[props.size]};
    margin: ${props => props.theme.button.margin};
    transition: all ${props => props.theme.transition.xs};

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        z-index: ${props => props.theme.zindex.button};
        height: 100%;
        width: 100%;
        border-radius: ${props => props.theme.radius.sm};
        opacity: ${props => props.type == 'reverse' ? 0.6 : 0.5};
        transition:
            all ${props => props.theme.transition.xs},
            opacity ${props => props.theme.transition.sm} linear ${props => props.theme.transition.xs};
    }

    &::before {
        top: ${props => props.theme.button.shift};
        left: ${props => props.theme.button.shift};
    }

    &::after {
        bottom: ${props => props.theme.button.shift};
        right: ${props => props.theme.button.shift};
    }
`;

const hover = css`
    &:hover,
    &:active,
    &:focus {
        &::before,
        &::after {
            opacity: 1;
        }

        &::before {
            top: 0;
            left: 0;
        }

        &::after {
            bottom: 0;
            right: 0;
        }
    }
`;

const disabled = css`
    cursor: 'not-allowed';
`;

const ButtonFill = styled(ButtonBase)`
    ${hover};

    color: ${props => props.theme.color.white00};

    &::before,
    &::after {
        background-color: ${props => props.theme.color[props.color]['main']};
    }
`;

const ButtonLine = styled(ButtonBase)`
    ${hover};

    color: ${props => props.theme.color[props.color]['main']};

    &::before,
    &::after {
        border: solid ${props => props.theme.line} ${props => props.theme.color[props.color]['main']};
    }
`;

const ButtonFillReverse = styled(ButtonBase)`
    ${hover};
    
    color: ${props => props.theme.color[props.color]['main']};

    &::before,
    &::after {
        background-color: ${props => props.theme.color.white00};
    }
`;

const ButtonLineReverse = styled(ButtonBase)`
    ${hover};

    color: ${props => props.theme.color.white00};

    &::before,
    &::after {
        border: solid ${props => props.theme.line} ${props => props.theme.color.white00};
    }
`;

const ButtonFillDisabled = styled(ButtonBase)`
    ${disabled};

    color: ${props => props.theme.color.white20};

    &::before,
    &::after {
        background-color: ${props => props.theme.color.grey30};
    }
`;

const ButtonLineDisabled = styled(ButtonBase)`
    ${disabled};

    color: ${props => props.theme.color.grey30};

    &::before,
    &::after {
        border: solid ${props => props.theme.line} ${props => props.theme.color.grey30};
    }
`;

export {
    ButtonFill,
    ButtonLine,
    ButtonFillReverse,
    ButtonLineReverse,
    ButtonFillDisabled,
    ButtonLineDisabled
};