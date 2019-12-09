import { css } from 'styled-components';
import { math } from 'polished';

const displayStyle = {
    flex: css`
        display: flex;
        flex-direction: column;
        padding: ${props => math(props.theme.space[props.padding] + '-' + props.theme.space[props.gap] + '/2')};

        & > * {
            margin: ${props => math(props.theme.space[props.gap] + '/2')};
        }

        @media (${props => props.theme.query.min.md}) {
            flex-direction: ${props => props.flexDirection};
            flex-wrap: ${props => props.flexWrap};
            justify-content: ${props => props.justifyContent};
            align-items: ${props => props.alignItems};
        }
    `,
    grid: css`
        display: grid;
        gap: ${props => props.theme.space[props.gap]};
        padding: ${props => props.theme.space[props.padding]};

        @media (${props => props.theme.query.min.md}) {
            grid-template-columns: repeat(${props => props.columns}, 1fr);
            justify-items: ${props => props.justifyItems};
        }
    `,
    column: css`
        columns: 1;
        gap: ${props => props.theme.space[props.gap]};
        padding: ${props => props.theme.space[props.padding]};

        & > * {
            break-inside: avoid-column;
            margin-top: ${props => props.theme.space[props.gap]};
            margin-bottom: ${props => props.theme.space[props.gap]};

            &:first-child {
                margin-top: 0;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }

        @media (${props => props.theme.query.min.md}) {
            columns: ${props => props.columns};
        }
    `
}

export {
    displayStyle
};