import { css } from 'styled-components';
import { mainColor } from './constants';
import { math } from 'polished';

const childrenStyle = css`
    & :only-child {
        border-radius: ${props => math(props.theme.dataBar.height + '/2')};
    }

    & :first-child {
        margin-right: ${props => props.theme.dataBar.line};
    }

    & :nth-child(n + 2):nth-last-child(n + 2) {
        margin: 0 ${props => props.theme.dataBar.line} 0
            ${props => props.theme.dataBar.line};
    }

    & :last-child {
        margin-left: ${props => props.theme.dataBar.line};
        border-top-right-radius: ${props =>
            math(props.theme.dataBar.height + '/2')};
        border-bottom-right-radius: ${props =>
            math(props.theme.dataBar.height + '/2')};
    }
`;

const hasBackgroundStyle = css`
    background-color: ${props => props.theme.wab.grey10};
`;

const valueStyle = css`
    width: ${props => props.dataWidth + '%'};
    min-width: ${props => props.theme.dataBar.height};
    background-color: ${props => mainColor[props.colorPallet]};
`;

const zeroValueStyle = css`
    width: ${props => props.theme.dataBar.height};
    background-color: ${props => props.theme.wab.grey30};
`;

export { childrenStyle, hasBackgroundStyle, valueStyle, zeroValueStyle };
