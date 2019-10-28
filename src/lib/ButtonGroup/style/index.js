import styled from 'styled-components';

const ButtonGroupBase = styled.div.attrs(props => ({
    align: props.align || 'center',
    margin: props.margin || 'xs'
}))`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : props.align};
    margin: 0 ${props => props.theme.button.marginBlock};
    margin-top: ${props => props.theme.space[props.margin]};
`;

export { ButtonGroupBase };