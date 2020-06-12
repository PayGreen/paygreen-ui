import { css } from 'styled-components';
import { mainColor } from './constants';
import { math } from 'polished';

const childrenStyle = css`
    & :only-child {
        border-radius: ${props =>
            math(props.theme.font.underline.space.xs + '/2')};
    }

    & :first-child {
        margin-right: ${props => math(props.theme.line + '/2')};
    }

    & :nth-child(n + 2):nth-last-child(n + 2) {
        margin: 0 ${props => math(props.theme.line + '/2')} 0
            ${props => math(props.theme.line + '/2')};
    }

    & :last-child {
        margin-left: ${props => math(props.theme.line + '/2')};
        border-top-right-radius: ${props =>
            math(props.theme.font.underline.space.xs + '/2')};
        border-bottom-right-radius: ${props =>
            math(props.theme.font.underline.space.xs + '/2')};
    }
`;

const hasBackgroundStyle = css`
    background-color: ${props => props.theme.wab.grey10};
`;

const valueStyle = css`
    width: ${props => props.dataWidth + '%'};
    min-width: ${props => props.theme.font.underline.space.xs};
    background-color: ${props => mainColor[props.colorPallet]};
`;

const zeroValueStyle = css`
    width: ${props => props.theme.font.underline.space.xs};
    background-color: ${props => props.theme.wab.grey30};
`;

export {
    childrenStyle,
    hasBackgroundStyle,
    valueStyle,
    zeroValueStyle,
};
