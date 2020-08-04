import { css } from 'styled-components';
import { math } from 'polished';

const gridAlign = {
    left: css`
        margin: 0;
    `,
    center: css`
        margin: 0 auto;
    `,
    right: css`
        margin: 0;
        margin-left: auto;
    `,
};

const childrenMargins = css`
    & > * {
        margin: ${props => props.theme.space[props.childrenMargin]} auto;

        @media (${props => props.theme.query.min.md}) {
            margin: ${props => props.theme.space[props.childrenMarginBig]};
        }
    }
`;

const gridStyles = css`
    display: grid;
    justify-items: ${props => props.justifyItems};
    align-items: ${props => props.alignItems};
`;

const gridColumns = {
    two: css`
        @media (${props => props.theme.query.min.md}) and
            (${props => props.theme.query.max.lg}) {
            width: fit-content;
        }

        @media (${props => props.theme.query.min.lg}) {
            ${gridStyles};
        }
    `,
    more: css`
        @media (${props => props.theme.query.min.md}) {
            ${gridStyles};
        }
    `,
};

const gridTemplate = {
    custom: css`
        @media (${props => props.theme.query.min.md}) {
            grid-template-columns: ${props => props.gridTemplateColumns};
        }
    `,
    auto: css`
        @media (${props => props.theme.query.min.md}) {
            grid-template-columns: repeat(
                ${props => props.columnNumber - 1},
                1fr
            );
        }

        @media (${props => props.theme.query.min.lg}) {
            grid-template-columns: repeat(${props => props.columnNumber}, 1fr);
        }
    `,
};

const displayStyle = {
    flex: css`
        @media (${props => props.theme.query.min.md}) {
            display: flex;
            flex-direction: ${props => props.flexDirection};
            flex-wrap: ${props => props.flexWrap};
            justify-content: ${props => props.justifyContent};
            align-items: ${props => props.alignItems};

            & > * {
                flex: ${props => props.childrenFlex};
            }
        }

        ${childrenMargins};
    `,
    grid: css`
        ${props =>
            props.columnNumber <= 2 ? gridColumns.two : gridColumns.more};
        
        ${props =>
            props.gridTemplateColumns
                ? gridTemplate.custom
                : gridTemplate.auto};

        ${childrenMargins};
    `,
    column: css`
        & > * {
            padding: ${props =>
                    math(props.theme.space[props.childrenMargin] + '/2')}
                0;

            & > * {
                margin: 0 auto;
            }
        }

        @media (${props => props.theme.query.min.md}) {
            padding-top: ${props => props.theme.space[props.childrenMarginBig]};
            width: fit-content;
            columns: ${props => props.columnNumber - 1};
            gap: 0;

            & > * {
                padding: ${props => props.theme.space[props.childrenMarginBig]};
                padding-top: 0;
                padding-bottom: ${props => math(props.theme.space.lg + '*2')};
                display: inline-block;
                width: 100%;
                /* fix for shadow inside columns */
                transform: translateZ(0);
            }
        }

        @media (${props => props.theme.query.min.lg}) {
            columns: ${props => props.columnNumber};
        }
    `,
};

function childrenShift(count, shiftSize, isNegative, isReverse) {
    let styles = '';

    for (let i = 1; i <= count; i++) {
        styles += `
            &:nth-child(${isReverse ? count - i + 1 : i}) {
                margin-top: ${math(
                    (isNegative ? '-' : '') + shiftSize + '*' + (i - 1),
                )};
            }
        `;
    }

    return css`
        & > * {
            @media (${props => props.theme.query.min.xl}) {
                ${styles}
            }
        }
    `;
}

export { gridAlign, displayStyle, childrenShift };
