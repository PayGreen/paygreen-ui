import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import ClickableBlock from './ClickableBlock';

it('renders without crashing', () => {
    const clickableBlock = TestRenderer.create(
        <ClickableBlock theme={ThemeDefault}>Un ClickableBlock</ClickableBlock>,
    );
    expect(clickableBlock.toJSON()).toMatchSnapshot();
});
