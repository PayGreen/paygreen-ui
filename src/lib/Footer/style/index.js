import styled, { css } from 'styled-components';
import { decorationOptions } from '../../../shared/constants';
import { topStyle } from '../../BannerImage/style/base';

const FooterBase = styled.footer`
    ${props => topStyle[props.topStyle]};
    background-color: ${props => props.theme.wab.white10};
    padding: 0.1px 0;

    .waveTop {
        position: relative;
        margin-top: -0.1px;
        margin-bottom: ${props => props.theme.space.md};
        fill: ${props => props.theme.wab.white00}; // remove dark line
        opacity: 0.2;
        filter: drop-shadow(
            0 0 ${props => props.theme.space.md}
                ${props => props.theme.wab.black00}
        );
        transform: ${props =>
            props.topStyle === decorationOptions.right ? 'scaleX(-1)' : null};
    }
`;

export { FooterBase };
