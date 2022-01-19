import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Text from '../Text/Text';
import ListItem from './ListItem';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <ListItem theme={ThemeDefault}>
            <Text theme={ThemeDefault}>
                Something
            </Text>
        </ListItem>
    );
    expect(component.toJSON()).toMatchSnapshot();
});