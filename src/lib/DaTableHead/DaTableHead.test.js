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
            <DaTableHeadCell isCheckbox={true} theme={ThemeDefault}>
                <Checkbox id="select" theme={ThemeDefault}/>
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
