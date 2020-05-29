import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Overlay from './Overlay';

it('renders without crashing', () => {
    const overlay = TestRenderer.create(<Overlay theme={ThemeDefault} />);
    expect(overlay.toJSON()).toMatchSnapshot();
});
