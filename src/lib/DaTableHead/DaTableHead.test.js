import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { ArrowBottomIcon } from '../Icon/Icon';
import Checkbox from '../Checkbox/Checkbox';
import DaTableHeadCell from '../DaTableHeadCell/DaTableHeadCell';
import DaTableHead from './DaTableHead';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableHead theme={ThemeDefault}>
            <DaTableHeadCell theme={ThemeDefault}>
                <Checkbox theme={ThemeDefault} id="select" />
            </DaTableHeadCell>

            <DaTableHeadCell
                sortIcon={<ArrowBottomIcon theme={ThemeDefault} />}
                theme={ThemeDefault}
            >
                Something
            </DaTableHeadCell>

            <DaTableHeadCell label="First name" theme={ThemeDefault}>
                Something
            </DaTableHeadCell>
        </DaTableHead>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
