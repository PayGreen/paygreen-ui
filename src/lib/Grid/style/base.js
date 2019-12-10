import { css } from 'styled-components';
import { math } from 'polished';
import {
    blockSpaceOptions
} from '../../../shared/constants';
import { shiftSize } from './constants';

const thirdChildShiftStyle = css`
    &:nth-child(3) {
        margin-top: ${props => shiftSize.double(props)};
    }
`;

const childrenShiftStyle = css`
    & > * {
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
        }
    `
};

const shiftStyle = css`
    ${props => props.reverseShift ? reverseChildrenShift[props.columns] : childrenShiftStyle};
`;

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

            ${props => props.childrenShift !== blockSpaceOptions.none ? shiftStyle : null};
        }
    `,
    grid: css`
        display: grid;
        gap: ${props => props.theme.space[props.gap]};
        padding: ${props => props.theme.space[props.padding]};

        @media (${props => props.theme.query.min.md}) {
            grid-template-columns: repeat(${props => props.columns}, 1fr);
            justify-items: ${props => props.justifyItems};

            ${props => props.childrenShift !== blockSpaceOptions.none ? shiftStyle : null};
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
};

export {
    displayStyle
};