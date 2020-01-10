import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Text from '../Text/Text';
import ListHorizontal from './ListHorizontal';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <ListHorizontal theme={ThemeDefault}>
            <Text theme={ThemeDefault}>
                Text 1
            </Text>

            <Text theme={ThemeDefault}>
                Text 2
            </Text>

            <Text theme={ThemeDefault}>
                Text 3
            </Text>
        </ListHorizontal>
    );
    expect(component.toJSON()).toMatchSnapshot();
});