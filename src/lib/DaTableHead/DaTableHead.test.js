import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTableHead from './DaTableHead';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableHead theme={ThemeDefault}>
            Something
        </DaTableHead>
    );
    expect(component.toJSON()).toMatchSnapshot();
});