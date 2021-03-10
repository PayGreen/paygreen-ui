import React from 'react';
import { PGThemeProvider, ThemeDefault } from '@paygreen/paygreen-ui';
import styled from 'styled-components';

const StyleForLib = styled.div`
    font-size: 62%;
`;

const WrapperComponent = ({ children }) => {
    return (
        <StyleForLib>
            <PGThemeProvider theme={ThemeDefault}>{children}</PGThemeProvider>
        </StyleForLib>
    );
};

export default WrapperComponent;
