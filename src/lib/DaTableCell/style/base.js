import { css } from 'styled-components';
import { transparentize } from 'polished';

const borderRight = css`
    border-right: solid ${props => props.theme.line};
    border-right-color: ${props =>
        transparentize(0.95, props.theme.wab.black00)};

    &:last-of-type {
        border-right: none;
    }
`;

const idStyle = css`
    .cell-content {
        background-color: ${props => props.theme.wab.grey20};
        border-radius: ${props => props.theme.radius.sm};
        font-size: ${props => props.theme.font.size.xxs};
        font-weight: ${props => props.theme.font.weight.bold};
        padding: ${props => props.theme.line} ${props => props.theme.space.xs};
    }
`;

const mainStyle = css`
    .cell-label {
        display: none;
    }
    margin: auto 15px;
`;

const notMainStyle = css`
    display: flex;
    justify-content: ${props => props.hasLabel ? 'space-between' : 'center'};
    align-items: center;
    white-space: nowrap;

    .cell-label {
        flex: 1;
        display: flex;
        align-items: center;
        color: ${props => props.theme.wab.grey40};
        text-transform: uppercase;
        font-size: ${props => props.theme.font.size.tiny};
        font-weight: ${props => props.theme.font.weight.bold};
        letter-spacing: ${props => props.theme.font.spacing};

        &::after {
            content: '';
            flex: 1;
            border-top: dotted ${props => props.theme.line} ${props => props.theme.wab.grey20};
            margin: 0 ${props => props.theme.space.xs};
        }
    }
`;

export { borderRight, idStyle, mainStyle, notMainStyle };
