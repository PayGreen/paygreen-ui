import styled from 'styled-components';
import { math } from 'polished';

const YAxisBase = styled.div`
    position: relative;
    height: ${props => props.theme.histogram.height[props.blockHeight]};
    padding-right: ${props => props.theme.line};
    display: grid;
    grid-template-rows: ${props => props.gridTemplateRows};
    justify-items: end;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -${props => props.theme.line};
        height: ${props =>
            math(
                props.theme.histogram.height[props.blockHeight] +
                    ' + ' +
                    props.theme.space.sm,
            )};
        width: ${props => props.theme.line};
        background-color: ${props => props.theme.wab.grey20};
    }
`;

const YAxisElementBase = styled.div`
    display: flex;
    align-items: center;
    padding-top: ${props => props.theme.line};
    transform: translateY(-50%);

    &::after {
        content: '';
        height: ${props => props.theme.line};
        width: ${props => props.theme.space.sm};
        margin-left: ${props => props.theme.space.xs};
        background-color: ${props => props.theme.wab.grey20};
    }
`;

export { YAxisBase, YAxisElementBase };
