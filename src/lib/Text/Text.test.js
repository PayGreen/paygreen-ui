import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Text from './Text';

it('renders without crashing', () => {
    const text = TestRenderer.create(
        <Text theme={ThemeDefault}>
            Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Donec eget <em>nulla in libero</em> laoreet sodales.
        </Text>
    );
    expect(text.toJSON()).toMatchSnapshot();
});