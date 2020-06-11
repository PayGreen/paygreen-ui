import { css } from 'styled-components';
import { math } from 'polished';

const hasBackgroundStyle = css`
    background-color: ${props => props.theme.wab.grey10};
`;

const valueStyle = css`
    width: ${props => props.dataWidth + '%'};
    background-color: ${props => props.dataColor};
`;

const zeroValueStyle = css`
    width: ${props => props.theme.space.sm};
    background-color: ${props => props.theme.wab.grey30};
`;

const monoDataStyle = css`
    & :only-child {
        border-radius: ${props => props.theme.space.xs};
    }
`;

const multiDataStyle = css`
    & :first-child {
        margin-right: 1px;
    }
    
    & :nth-child(n+2):nth-last-child(n+2) {
        margin: 0 1px 0 1px;
    }

    & :last-child {
        margin-left: 1px;
    }
`;

export {
    hasBackgroundStyle,
    zeroValueStyle,
    valueStyle,
    monoDataStyle,
    multiDataStyle,
};
