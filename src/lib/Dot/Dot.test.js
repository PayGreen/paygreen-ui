import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Dot from './Dot';

it('renders without crashing', () => {
    const component = TestRenderer.create(<Dot theme={ThemeDefault} />);
    expect(component.toJSON()).toMatchSnapshot();
});
