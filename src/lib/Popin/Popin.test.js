import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Text from '../Text/Text';
import Title from '../Title/Title';
import Popin from './Popin';

it('renders without crashing', () => {
    const popin = TestRenderer.create(
        <Popin theme={ThemeDefault}>
            <Title theme={ThemeDefault}>Démo</Title>
            <Text theme={ThemeDefault}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </Text>
        </Popin>,
    );
    expect(popin.toJSON()).toMatchSnapshot();
});
