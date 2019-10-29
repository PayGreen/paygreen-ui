import styled, { css } from 'styled-components';

const base = css`
    margin: 0;
    font-weight: ${props => props.theme.font.weight.bold};
`;

const TitleH1 = styled.h1`
    ${base};
`;

const TitleH2 = styled.h2`
    ${base};
`;

const TitleH3 = styled.h3`
    ${base};
`;

const TitleH4 = styled.h3`
    ${base};
`;

const TitleH5 = styled.h5`
    ${base};
`;

const TitleH6 = styled.h6`
    ${base};
`;

const TitleSpan = styled.span`
    ${base};
    display: block;
`;

export {
    TitleH1,
    TitleH2,
    TitleH3,
    TitleH4,
    TitleH5,
    TitleH6,
    TitleSpan
};