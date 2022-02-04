import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { OutIcon } from '../Icon/Icon';
import IconLabel from './IconLabel';

it('renders without crashing', () => {
    const iconLabel = TestRenderer.create(
        <IconLabel theme={ThemeDefault} icon={<OutIcon theme={ThemeDefault} />}>
            Label text
        </IconLabel>,
    );
    expect(iconLabel.toJSON()).toMatchSnapshot();
});
