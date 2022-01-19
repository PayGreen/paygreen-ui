import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import StepNavbarItem from './StepNavbarItem';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <StepNavbarItem theme={ThemeDefault}>
            1 – Step one
        </StepNavbarItem>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
