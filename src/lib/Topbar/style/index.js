import styled from 'styled-components';
import { topbarStyle } from './base';
import { LogoBase } from '../../Logo/style';

const TopbarBase = styled.header`
    .main-nav {
        a {
            display: block;
            height: 100%;
        }
    }

    @media (${props => props.theme.query.max.md}) {
        .main-nav {
            ${topbarStyle};
        }

        ${LogoBase} {
            padding: 0 !important;
        }
    }

    @media (${props => props.theme.query.min.md}) {
        .main-nav {
            ${topbarStyle};
        }

        ${LogoBase} {
            display: none;
        }
    }
`;

export { TopbarBase };
