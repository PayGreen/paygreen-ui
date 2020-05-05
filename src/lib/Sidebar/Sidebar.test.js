import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Sidebar from './Sidebar';
import { colorPalletOptions, greyOptions } from '../../shared/constants';
import { ArrowRightIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const sidebar = TestRenderer.create(
        <Sidebar theme={ThemeDefault}>
                <ArrowRightIcon
                    htmlTag="button"
                    iconSize="xl"
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                />
        </Sidebar>,
    );
    expect(sidebar.toJSON()).toMatchSnapshot();
});
