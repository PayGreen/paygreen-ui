import styled from 'styled-components';
import { transparentize } from 'polished';
import { fixedStyle } from '../../MenuTertiary/style/base';

const HeaderBase = styled.div`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    box-shadow: ${props => props.theme.shadow.size.lg + ' ' + transparentize(
        props.theme.shadow.opacity.sm,
        props.theme.wab.black00
    )};

    ${props => (props.isFixed ? fixedStyle : null)};
`;

export { HeaderBase };
