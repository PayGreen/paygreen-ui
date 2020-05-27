import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTableRow from './DaTableRow';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableRow theme={ThemeDefault}>
            Something
        </DaTableRow>
    );
    expect(component.toJSON()).toMatchSnapshot();
});