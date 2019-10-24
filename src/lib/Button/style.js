import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const StyledButton = styled.a`
    background-color: ${props => (props.disabled ? props.theme.color.grey40 : props.theme.color.primary.main)};
    display: inline-block;
    padding: 10px;
    color: ${props => (props.theme.bg)};

    @media (${props => (props.theme.querie.max.sm)}) {
        animation: ${rotate} 2s linear infinite;
    }
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