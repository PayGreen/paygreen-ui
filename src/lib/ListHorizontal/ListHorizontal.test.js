import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import ListHorizontal from './ListHorizontal';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <ListHorizontal theme={ThemeDefault}>
            Something
        </ListHorizontal>
    );
    expect(component.toJSON()).toMatchSnapshot();
});