import React from 'react'
import Text from './Text';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';

it('renders without crashing', () => {
    const text = TestRenderer.create(
        <Text theme={ThemeDefault}>
            Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Donec eget <em>nulla in libero</em> laoreet sodales.
        </Text>
    );
    expect(text.toJSON()).toMatchSnapshot();
});