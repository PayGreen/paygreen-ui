import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Text from '../Text/Text';
import FormMessage from './FormMessage';

it('renders without crashing', () => {
    const formMessage = TestRenderer.create(
        <FormMessage theme={ThemeDefault}>
            <Text theme={ThemeDefault}>
                Lorem ipsum dolor sit amet, consectetur non sodales.
            </Text>
        </FormMessage>,
    );
    expect(formMessage.toJSON()).toMatchSnapshot();
});
