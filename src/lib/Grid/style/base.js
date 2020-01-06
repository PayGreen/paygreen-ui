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

        ${props => props.columns > 2 ? thirdChildShiftStyle : null};
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
    ${props => props.reverseShift ? reverseChildrenShift[props.columns] : childrenShiftStyle};
`;

const displayStyle = {
    flex: css`
        display: flex;
        flex-direction: ${props => props.flexDirection};
        flex-wrap: ${props => props.flexWrap};
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};
    `,
    grid: css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: ${props => props.justifyItems};
        align-items: ${props => props.alignItems};

        @media (${props => props.theme.query.min.lg}) {
            grid-template-columns: repeat(${props => props.columns}, 1fr);
        }
    `,
    column: css`
        width: fit-content;
        columns: 2;
        gap: 0;
        padding-top: ${props => props.theme.space.lg};
        padding-bottom: ${props => props.theme.space.lg};

        @media (${props => props.theme.query.min.lg}) {
            columns: ${props => props.columns};
        }

        & > * {
            margin-top: 0;
            margin-bottom: ${props => math(props.theme.space.lg + '*2')};
            display: inline-block;
            /* fix for shadow inside columns */
            transform: translateZ(0);
        }
    `
};

const flex1Style = css`
    flex: 1;
`;

export {
    shiftStyle,
    displayStyle,
    flex1Style
};