import styled, { css } from 'styled-components';
import { decorationOptions } from '../../../shared/constants';
import { topStyle } from '../../BannerImage/style/base';

const waveRightStyle = css`
    transform: scaleX(-1);
`;

const FooterBase = styled.footer`
    background-color: ${props => props.theme.wab.white10};
    ${props => topStyle[props.topStyle]};

    .waveTop {
        ${props => props.topStyle === decorationOptions.right ?
            waveRightStyle : null};
        position: relative;
        margin-top: -0.1px;
        margin-bottom: ${props => props.theme.space.md};
        fill: ${props => props.theme.wab.white00};
        filter: drop-shadow(0 0 ${props => props.theme.space.md} ${props => props.theme.wab.black00});
        opacity: .2;
    }
`;

export { FooterBase };