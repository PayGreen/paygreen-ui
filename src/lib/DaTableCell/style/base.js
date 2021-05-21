import { css } from 'styled-components';
import { reflection } from '../../SkeletonItem/style/base';
import { CheckboxBase } from '../../Checkbox/style';

const loadingStyle = css`
    .cell-content {
        position: relative;
        border-radius: ${props => props.theme.radius.sm};
        background-color: ${props => props.theme.wab.grey10};
        ${reflection.grey10};
    }
`;

const borderRight = css`
    &:not(:last-of-type) {
        @media ${props => props.theme.screen.min.lg} {
            border-right: solid
                ${props => props.theme.line + ' ' + props.theme.wab.grey10};
        }
    }
`;

const checkboxStyle = css`
    &:not(:last-of-type) {
        @media ${props => props.theme.screen.min.lg} {
            padding-right: 0;
        }
    }

    ${CheckboxBase} {
        margin: 0;
    }
`;

const idStyle = css`
    .cell-content {
        min-height: inherit;
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
`;

const notMainStyle = css`
    display: grid;
    grid-template-columns : ${props => (props.hasLabel ? 'minmax(20px, auto) minmax(50px, 100%) minmax(20px, auto)' : '1fr')};
    align-items: center;
    justify-items: stretch;

    .cell-label {
        flex: 1;
        display: flex;
        align-items: center;
        color: ${props => props.theme.wab.grey40};
        text-transform: uppercase;
        font-size: ${props => props.theme.font.size.tiny};
        font-weight: ${props => props.theme.font.weight.bold};
        letter-spacing: ${props => props.theme.font.spacing};
    }

    .cell-line {
        flex: 1;
        display: flex;
        align-items: center;
        color: ${props => props.theme.wab.grey40};

        &::after {
            content: '';
            flex: 1;
            border-top: dotted
                ${props => props.theme.line + ' ' + props.theme.wab.grey20};
            margin: 0 ${props => props.theme.space.xs};
        }
    }
`;

export {
    loadingStyle,
    borderRight,
    checkboxStyle,
    idStyle,
    mainStyle,
    notMainStyle,
};
