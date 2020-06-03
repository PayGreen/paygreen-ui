import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTableHeadCell from './DaTableHeadCell';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableHeadCell theme={ThemeDefault}>
            Something
        </DaTableHeadCell>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
