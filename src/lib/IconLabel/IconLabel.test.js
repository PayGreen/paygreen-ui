import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import {
    spaceOptions,
    iconSizeOptions
} from '../../shared/constants';
import { OutIcon } from '../Icon/Icon';
import IconLabel from './IconLabel';

it('renders without crashing', () => {
    const iconLabel = TestRenderer.create(
        <IconLabel
            theme={ThemeDefault}
        >
            <OutIcon
                theme={ThemeDefault}
                iconSize={iconSizeOptions.xs}
                marginRight={spaceOptions.xs}
            />

            Label text
        </IconLabel>
    );
    expect(iconLabel.toJSON()).toMatchSnapshot();
});