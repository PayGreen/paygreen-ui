import styled from 'styled-components'

const StyledButton = styled.div`
    background-color: ${props => (props.disabled ? props.theme.color.disabled : props.theme.color.main)};
    display: inline-block;
    padding: 10px;
    color: white;
`;

const Button = styled(StyledButton)``;

const ButtonOutlet = styled(StyledButton)`
    background-color:  transparent;
    border: 2px solid ${props => (props.disabled ? '#dfe6e9' : '#fab1a0')};
    color: ${props => (props.disabled ? '#dfe6e9' : '#fab1a0')};
`;

export {
    ButtonOutlet,
    Button
};