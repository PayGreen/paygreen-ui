import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Text from '../Text/Text';
import ListItem from '../ListItem/ListItem';
import List from './List';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <List theme={ThemeDefault}>
            <ListItem theme={ThemeDefault}>
                <Text theme={ThemeDefault}>
                    Something
                </Text>
            </ListItem>

            <ListItem theme={ThemeDefault}>
                <Text theme={ThemeDefault}>
                    Something else
                </Text>
            </ListItem>
        </List>
    );
    expect(component.toJSON()).toMatchSnapshot();
});