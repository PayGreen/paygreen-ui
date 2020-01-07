import { css } from 'styled-components';
import { math } from 'polished';
import { shiftSize } from './constants';

const thirdChildShiftStyle = css`
    &:nth-child(3) {
        margin-top: ${props => shiftSize.double(props)};
    }
`;

const childrenShiftStyle = css`
    & > * {
        &:first-child {
            margin-top: 0;
        }

        &:nth-child(2) {
            margin-top: ${props => shiftSize.simple(props)};
        }

        ${props => props.columnNumber > 2 ? thirdChildShiftStyle : null};
    }
`;

const reverseChildrenShift = {
    2: css`
        & > * {
            &:first-child {
                margin-top: ${props => shiftSize.simple(props)};
            }

            &:nth-child(2) {
                margin-top: 0;
            }
        }
    `,
    3: css`
        & > * {
            &:first-child {
                margin-top: ${props => shiftSize.double(props)};
            }

            &:nth-child(2) {
                margin-top: ${props => shiftSize.simple(props)};
            }

            &:nth-child(3) {
                margin-top: 0;
            }
        }
    `
};

const shiftStyle = css`
    ${props => props.reverseShift ?
        reverseChildrenShift[props.columnNumber] : childrenShiftStyle};
`;

const childrenClassicStyle = css`
    & > * {
        margin: ${props => props.theme.space[props.childrenMargin]} auto;

        @media (${props => props.theme.query.min.md}) {
            margin: ${props => props.theme.space[props.childrenMarginBig]};
        }
    }
`;

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
        
        ${childrenClassicStyle};
    `,
    grid: css`
        @media (${props => props.theme.query.min.md}) {
            display: grid;
            grid-template-columns: repeat(${props => props.columnNumber - 1}, 1fr);
            justify-items: ${props => props.justifyItems};
            align-items: ${props => props.alignItems};
        }

        @media (${props => props.theme.query.min.lg}) {
            grid-template-columns: repeat(${props => props.columnNumber}, 1fr);
        }

        ${childrenClassicStyle};
    `,
    column: css`
        & > * {
            padding: ${props => math(props.theme.space[props.childrenMargin] + '/2')} 0;

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
    `
};

export {
    shiftStyle,
    displayStyle
};