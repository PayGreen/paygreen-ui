import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import FormControl from './FormControl';

it('renders without crashing', () => {
    const formControl = TestRenderer.create(
        <FormControl theme={ThemeDefault}></FormControl>,
    );
    expect(formControl.toJSON()).toMatchSnapshot();
});
