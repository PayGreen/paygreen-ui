import React from 'react';
import Input from './Input';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { ThemeDefault } from '../../theme';

const styleDecorator = storyFN => <ThemeProvider theme={ThemeDefault}>{storyFN()}</ThemeProvider>

storiesOf('Input', module)
    .addParameters({
        options: {
            isFullscreen: false,
            showPanel: true
        },
    })
    .addDecorator(styleDecorator)
    .add('with text', () => (
        <Input text="🚴‍♂️">Hello Button</Input>
    ));
