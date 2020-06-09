import styled from 'styled-components';

const BoxBase = styled.div`
    max-width: 100%;

    padding: ${props => props.theme.space[props.padding]};

    padding-top: ${props =>
        props.paddingTop
            ? props.theme.space[props.paddingTop]
            : props.theme.space[props.padding]};

    padding-right: ${props =>
        props.paddingRight
            ? props.theme.space[props.paddingRight]
            : props.theme.space[props.padding]};

    padding-left: ${props =>
        props.paddingLeft
            ? props.theme.space[props.paddingLeft]
            : props.theme.space[props.padding]};

    padding-bottom: ${props =>
        props.paddingBottom
            ? props.theme.space[props.paddingBottom]
            : props.theme.space[props.padding]};

    margin: ${props => props.theme.space[props.margin]};

    margin-top: ${props =>
        props.marginTop
            ? props.theme.space[props.marginTop]
            : props.theme.space[props.margin]};

    margin-right: ${props =>
        props.marginRight
            ? props.theme.space[props.marginRight]
            : props.theme.space[props.margin]};

    margin-left: ${props =>
        props.marginLeft
            ? props.theme.space[props.marginLeft]
            : props.theme.space[props.margin]};

    margin-bottom: ${props =>
        props.marginBottom
            ? props.theme.space[props.marginBottom]
            : props.theme.space[props.margin]};
`;

export { BoxBase };
