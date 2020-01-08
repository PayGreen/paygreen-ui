import { css } from 'styled-components';

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
    `
};

const marginTop = css`
    margin-top: ${props => props.theme.space[props.marginTop]};
`;

const marginBottom = css`
    margin-bottom: ${props => props.theme.space[props.marginBottom]};
`;

const marginLateral = css`
    margin-left: ${props => props.theme.space[props.marginLateral]};
    margin-right: ${props => props.theme.space[props.marginLateral]};
`;

export {
    displayStyle,
    marginTop,
    marginBottom,
    marginLateral
};