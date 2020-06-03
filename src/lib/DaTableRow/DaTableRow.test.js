import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTableCell from '../DaTableCell/DaTableCell';
import DaTableRow from './DaTableRow';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableRow theme={ThemeDefault}>
            <DaTableCell theme={ThemeDefault} isCheckbox={true}>
                <input type="checkbox" />
            </DaTableCell>

            <DaTableCell theme={ThemeDefault} isId={true}>
                4217
            </DaTableCell>

            <DaTableCell theme={ThemeDefault}>Something</DaTableCell>

            <DaTableCell theme={ThemeDefault} isMain={false}>
                Something else
            </DaTableCell>
        </DaTableRow>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
