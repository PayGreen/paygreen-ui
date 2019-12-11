import styled from 'styled-components';
import { textColor } from './constants';

const BreadcrumbBase = styled.ul`
    margin: ${props => props.theme.space.md} 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    font-size: ${props => props.theme.font.size.xs};
    font-weight: ${props => props.theme.font.weight.bold};
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};

    li {
        display: flex;
        align-items: center;
        padding: ${props => props.theme.space.xs} 0;

        a {
            outline: none;
            color: ${props => textColor.link[props.colorType]};
            transition: all ${props => props.theme.transition.xs};
        }

        &:not(:last-of-type) {
            a {
                &:hover,
                &:active,
                &:focus {
                    color: ${props => textColor.hover[props.colorType]};
                }
            }
        }

        &:last-of-type {
            a {
                cursor: default;
                color: ${props => textColor.default[props.colorType]};
            }
        }

        .icon {
            opacity: .8;
        }
    }
`;

export { BreadcrumbBase };