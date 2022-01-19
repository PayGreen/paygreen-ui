import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Checkbox from '../Checkbox/Checkbox';
import DaTableCell from '../DaTableCell/DaTableCell';
import DaTableRow from '../DaTableRow/DaTableRow';
import DaTableBody from './DaTableBody';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableBody theme={ThemeDefault}>
            <DaTableRow theme={ThemeDefault}>
                <DaTableCell theme={ThemeDefault}>
                    <Checkbox theme={ThemeDefault} id="select" />
                </DaTableCell>

                <DaTableCell theme={ThemeDefault} isId={true}>
                    4217
                </DaTableCell>

                <DaTableCell theme={ThemeDefault}>Something</DaTableCell>

                <DaTableCell theme={ThemeDefault} isMain={false}>
                    Something else
                </DaTableCell>
            </DaTableRow>
        </DaTableBody>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
