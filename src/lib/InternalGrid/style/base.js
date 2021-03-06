import { css } from 'styled-components';
import { calculateSpace, blockSpace } from '../../../shared/spaces';

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
        gap: ${props =>
            blockSpace(
                'sm',
                calculateSpace(props.gridGap, 0, 1, 'space'),
                'space',
            )};

        @media ${props => props.theme.screen.min.lg} {
            gap: ${props =>
                blockSpace(
                    'md',
                    calculateSpace(props.gridGap, 0, 1, 'space'),
                    'space',
                )};
        }
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
