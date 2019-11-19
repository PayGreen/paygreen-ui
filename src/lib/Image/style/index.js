import styled from 'styled-components';

const ImageBase = styled.div`
    height: ${props => props.theme.blockHeader[props.blockHeight]};

    img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export { ImageBase };