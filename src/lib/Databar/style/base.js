import { css } from 'styled-components';
import { math } from 'polished';

const hasBackgroundStyle = css`
    background-color: ${props => props.theme.wab.grey10};
`;

const valueStyle = css`
    width: ${props => props.dataWidth + '%'};
    min-width: ${props => props.theme.font.underline.space.xs};
    background-color: ${props => props.dataColor};
`;

const zeroValueStyle = css`
    width: ${props => props.theme.font.underline.space.xs};
    background-color: ${props => props.theme.wab.grey30};
`;

const monoDataStyle = css`
    & :only-child {
        border-radius: ${props =>
            math(props.theme.font.underline.space.xs + '/2')};
    }
`;

const multiDataStyle = css`
    & :first-child {
        margin-right: ${props => math(props.theme.line + '/2')};
    }

    & :nth-child(n + 2):nth-last-child(n + 2) {
        margin: 0 ${props => math(props.theme.line + '/2')} 0
            ${props => math(props.theme.line + '/2')};
    }

    & :last-child {
        margin-left: ${props => math(props.theme.line + '/2')};
    }
`;

export {
    hasBackgroundStyle,
    zeroValueStyle,
    valueStyle,
    monoDataStyle,
    multiDataStyle,
};
