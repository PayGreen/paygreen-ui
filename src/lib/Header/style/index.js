import styled from 'styled-components';
import { transparentize } from 'polished';
import { topStyle } from './base';

const HeaderBase = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: ${props => props.theme.zindex.header};
    box-shadow: ${props => props.theme.shadow.size.lg + ' ' + transparentize(
        props.theme.shadow.opacity.sm,
        props.theme.wab.black00
    )};

    ${props => (props.hasTopStyle ? topStyle : null)};
`;

export { HeaderBase };
