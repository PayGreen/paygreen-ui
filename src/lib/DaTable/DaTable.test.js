import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTable from './DaTable';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTable theme={ThemeDefault}>
            Something
        </DaTable>
    );
    expect(component.toJSON()).toMatchSnapshot();
});