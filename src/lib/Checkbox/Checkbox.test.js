import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
    const checkbox = TestRenderer.create(
        <Checkbox
            theme={ThemeDefault}
            checkboxId="first"
            checkboxValue="first"
            checkboxName="test"
        />,
    );
    expect(checkbox.toJSON()).toMatchSnapshot();
});
