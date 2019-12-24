import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { SatchelIcon } from '../Icon/Icon';
import RadioIcon from './RadioIcon';

it('renders without crashing', () => {
    const radio = TestRenderer.create(
        <RadioIcon
            theme={ThemeDefault}
            name="radioIconTest"
            id="radioIconTest1"
            text="label"
        >
            <SatchelIcon theme={ThemeDefault} />
        </RadioIcon>
    );
    expect(radio.toJSON()).toMatchSnapshot();
});