import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { ArrowBottomIcon } from '../Icon/Icon';
import DaTableHeadCell from './DaTableHeadCell';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <DaTableHeadCell
            theme={ThemeDefault}
            sortIcon={<ArrowBottomIcon theme={ThemeDefault} />}
        >
            Something
        </DaTableHeadCell>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
