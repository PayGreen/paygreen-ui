import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTableCell from '../DaTableCell/DaTableCell';
import DaTableRow from '../DaTableRow/DaTableRow';
import DaTable from './DaTable';

const row = (
    <DaTableRow theme={ThemeDefault}>
        <DaTableCell theme={ThemeDefault} isId={true}>
            4217
        </DaTableCell>

        <DaTableCell theme={ThemeDefault}>Something</DaTableCell>

        <DaTableCell theme={ThemeDefault} isMain={false}>
            Something else
        </DaTableCell>
    </DaTableRow>
);

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTable theme={ThemeDefault}>
            {row}
            {row}
            {row}
        </DaTable>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
