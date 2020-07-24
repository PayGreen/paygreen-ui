import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Corner from './Corner';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Corner theme={ThemeDefault}>
            Something
        </Corner>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
