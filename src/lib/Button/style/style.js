import styled from 'styled-components';
import {
    ButtonBase, 
    hover,
    disabled
} from './base';

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