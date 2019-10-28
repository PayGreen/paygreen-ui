import styled from 'styled-components';

const ButtonGroupBase = styled.div.attrs(props => ({
    align: props.align || 'center'
}))`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.align};
    margin: 0 ${props => props.theme.button.marginBlock};
`;

export { ButtonGroupBase };