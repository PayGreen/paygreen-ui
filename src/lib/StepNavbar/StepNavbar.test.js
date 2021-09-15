import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import StepNavbarItem from '../StepNavbarItem/StepNavbarItem';
import StepNavbar from './StepNavbar';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <StepNavbar theme={ThemeDefault}>
            <a href="#">
                <StepNavbarItem theme={ThemeDefault}>
                    1 – Step one
                </StepNavbarItem>
            </a>

            <StepNavbarItem theme={ThemeDefault} isDoing={true}>
                2 – Step two
            </StepNavbarItem>

            <StepNavbarItem theme={ThemeDefault}>3 – Step two</StepNavbarItem>
        </StepNavbar>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
