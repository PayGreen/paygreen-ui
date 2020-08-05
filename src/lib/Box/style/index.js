import styled from 'styled-components';

const BoxBase = styled.div`
    max-width: 100%;

    padding-top: ${props => props.theme.space[props.paddingTop]};
    padding-right: ${props => props.theme.space[props.paddingRight]};
    padding-left: ${props => props.theme.space[props.paddingLeft]};
    padding-bottom: ${props => props.theme.space[props.paddingBottom]};
    
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-right: ${props => props.theme.space[props.marginRight]};
    margin-left: ${props => props.theme.space[props.marginLeft]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};
`;

export { BoxBase };
