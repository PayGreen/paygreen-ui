import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import InternalGrid from './InternalGrid';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <InternalGrid theme={ThemeDefault}>
            <div>Something</div>

            <div>Something</div>

            <div>Something</div>
        </InternalGrid>
    );
    expect(component.toJSON()).toMatchSnapshot();
});