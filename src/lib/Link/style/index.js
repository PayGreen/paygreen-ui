import styled from 'styled-components';

const LinkBase = styled.a.attrs(props => ({
    color: props.color || 'primary',
}))`
    display: inline-block;
    position: relative;
    outline: none;
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.type === 'reverse' ? props.theme.color.white00 : props.theme.color[props.color]['main']};
    transition: all ${props => props.theme.transition.xs};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        z-index: ${props => props.theme.zindex.button};
        height: ${props => props.theme.line};
        width: 100%;
        background-color: ${props => props.type === 'reverse' ? props.theme.color.white00 : props.theme.color[props.color]['main']};
        opacity: .3;
        transition: all ${props => props.theme.transition.xs};
    }

    &:hover,
    &:active,
    &:focus {
        color: ${props => props.type === 'reverse' ? props.theme.color[props.color]['main'] : props.theme.color.white00};

        &::after {
            height: 100%;
            opacity: 1;
        }
    }
`;

export { LinkBase };