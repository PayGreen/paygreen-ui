import styled from 'styled-components';
import { titleStyle } from './style';

const TitleH1 = styled.h1`
    ${titleStyle};
`;

const TitleH2 = styled.h2`
    ${titleStyle};
`;

const TitleH3 = styled.h3`
    ${titleStyle};
`;

const TitleH4 = styled.h3`
    ${titleStyle};
`;

const TitleH5 = styled.h5`
    ${titleStyle};
`;

const TitleH6 = styled.h6`
    ${titleStyle};
`;

const TitleSpan = styled.span`
    display: block;
    ${titleStyle};
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