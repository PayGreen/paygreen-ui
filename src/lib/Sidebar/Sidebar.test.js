import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Sidebar from './Sidebar';
import {
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
} from '../../shared/constants';
import { ArrowRightIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const sidebar = TestRenderer.create(
        <Sidebar theme={ThemeDefault}>
            <ArrowRightIcon theme={ThemeDefault} />
        </Sidebar>,
    );
    expect(sidebar.toJSON()).toMatchSnapshot();
});
