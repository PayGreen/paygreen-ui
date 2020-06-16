import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Dropdown from './Dropdown';
import { PenIcon } from '../Icon/Icon';
import Popin from '../Popin/Popin';

it('renders without crashing', () => {
    const dropdown = TestRenderer.create(
        <Dropdown theme={ThemeDefault}>
            <PenIcon theme={ThemeDefault} />

            <Popin theme={ThemeDefault}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Popin>
        </Dropdown>,
    );
    expect(dropdown.toJSON()).toMatchSnapshot();
});
