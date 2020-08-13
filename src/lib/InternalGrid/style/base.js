import { css } from 'styled-components';
import { gridGap } from '../../Grid/style/base';

const displayStyle = {
    flex: css`
        display: flex;
        flex-wrap: ${props => props.flexWrap};
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};

        & > * {
            flex: ${props => props.childrenFlex};
        }
    `,
    grid: css`
        display: grid;
        grid-template-columns: ${props => props.gridTemplateColumns};
        grid-template-rows: ${props => props.gridTemplateRows};
        justify-items: ${props => props.justifyItems};
        align-items: ${props => props.alignItems};

        ${gridGap};
    `,
};

const childrenMargin = {
    lateral: css`
        margin-left: ${props => props.theme.space[props.childrenMarginLateral]};
        margin-right: ${props =>
            props.theme.space[props.childrenMarginLateral]};
    `,
    top: css`
        margin-top: ${props => props.theme.space[props.childrenMarginTop]};
    `,
    bottom: css`
        margin-bottom: ${props =>
            props.theme.space[props.childrenMarginBottom]};
    `,
};

export { displayStyle, childrenMargin };
