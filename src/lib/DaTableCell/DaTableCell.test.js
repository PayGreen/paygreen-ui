import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTableCell from './DaTableCell';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableCell theme={ThemeDefault}>
            Something
        </DaTableCell>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
