import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Text from '../Text/Text';
import Message from './Message';

it('renders without crashing', () => {
    const message = TestRenderer.create(
        <Message theme={ThemeDefault}>
            <Text theme={ThemeDefault}>
                Lorem ipsum dolor sit amet, consectetur non sodales.
            </Text>
        </Message>,
    );
    expect(message.toJSON()).toMatchSnapshot();
});
