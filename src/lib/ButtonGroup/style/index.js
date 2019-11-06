import styled from 'styled-components';
import { alignOptions } from '../../../shared/constants';

const ButtonGroupBase = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props =>
        props.align === alignOptions.left ? 
        'flex-start' : 
            props.align === alignOptions.right ? 
            'flex-end' :
            props.align
    };
    margin: 0 -${props => props.theme.space.sm};
    margin-top: ${props => props.theme.space[props.margin]};

    a {
        margin: ${props => props.theme.space.sm};
    }
`;

export { ButtonGroupBase };