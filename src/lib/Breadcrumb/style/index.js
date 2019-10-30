import styled from 'styled-components';
import { textColor } from './base';

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

        &:not(:first-of-type) {
            padding-left: ${props => props.theme.space.sm};

            &::before {
                content: '>';
                color: ${props => textColor.default[props.type]};
                margin-right: ${props => props.theme.space.sm};
            }
        }

        a {
            outline: none;
            color: ${props => textColor.link[props.type]};
            transition: all ${props => props.theme.transition.xs};
        }

        &:not(:last-of-type) {
            a {
                &:hover,
                &:active,
                &:focus {
                    color: ${props => textColor.hover[props.type]};
                }
            }
        }

        &:last-of-type {
            a {
                cursor: default;
                color: ${props => textColor.default[props.type]};
            }
        }
    }
`;

export { BreadcrumbBase };