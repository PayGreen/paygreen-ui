import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaLabel from '../DaLabel/DaLabel';
import DaTextarea from '../DaTextarea/DaTextarea';
import Message from '../Message/Message';
import Text from '../Text/Text';
import FormControl from './FormControl';

it('renders without crashing', () => {
    const formControl = TestRenderer.create(
        <FormControl theme={ThemeDefault}>
            <DaLabel theme={ThemeDefault}>Label Description</DaLabel>

            <DaTextarea
                theme={ThemeDefault}
                placeholder="Your text&hellip;"
                hasCounter={true}
            />

            <Message theme={ThemeDefault}>
                <Text theme={ThemeDefault}>
                    Lorem ipsum dolor sit amet, consectetur non sodales.
                </Text>
            </Message>
        </FormControl>,
    );
    expect(formControl.toJSON()).toMatchSnapshot();
});
