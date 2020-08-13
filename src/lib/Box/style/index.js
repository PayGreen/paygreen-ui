import styled, { css } from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const BoxBase = styled.div`
    max-width: 100%;

    ${props =>
        props.hasResponsivePadding
            ? responsiveSpaces('padding', 0, 1, 1, [
                  'Top',
                  'Left',
                  'Right',
                  'Bottom',
              ])
            : css`
                  padding-top: ${props => props.theme.space[props.paddingTop]};
                  padding-right: ${props =>
                      props.theme.space[props.paddingRight]};
                  padding-left: ${props =>
                      props.theme.space[props.paddingLeft]};
                  padding-bottom: ${props =>
                      props.theme.space[props.paddingBottom]};
              `};

    ${props =>
        props.hasResponsiveMargin
            ? responsiveSpaces('margin', 0, 1, 1, [
                  'Top',
                  'Left',
                  'Right',
                  'Bottom',
              ])
            : css`
                  margin-top: ${props => props.theme.space[props.marginTop]};
                  margin-right: ${props =>
                      props.theme.space[props.marginRight]};
                  margin-left: ${props => props.theme.space[props.marginLeft]};
                  margin-bottom: ${props =>
                      props.theme.space[props.marginBottom]};
              `};
`;

export { BoxBase };
