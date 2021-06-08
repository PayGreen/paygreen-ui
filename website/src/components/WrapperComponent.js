import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import {
    PGThemeProvider,
    ThemeDefault,
    ThemeDark,
} from '@paygreen/paygreen-ui';

const WrapperComponent = ({ children }) => {
    const { isDarkTheme } = useThemeContext();

    return (
        <PGThemeProvider theme={isDarkTheme ? ThemeDark : ThemeDefault}>
            {children}
        </PGThemeProvider>
    );
};

export default WrapperComponent;
