import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { textHtmlTagOptions } from '../../shared/constants';
import Text from './Text';

it('renders without crashing', () => {
    const text = TestRenderer.create(
        <>
            <Text theme={ThemeDefault}>
                Lorem ipsum dolor sit amet, consectetur{' '}
                <strong>adipiscing elit</strong>. Donec eget{' '}
                <em>nulla in libero</em> laoreet sodales.
            </Text>
            <Text theme={ThemeDefault} htmlTag={textHtmlTagOptions.strong}>
                Lorem ipsum dolor sit amet, consectetur
            </Text>
        </>,
    );
    expect(text.toJSON()).toMatchSnapshot();
});
