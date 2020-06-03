import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Radio from './Radio';


it('renders without crashing', () => {
    const radio = TestRenderer.create(
        <Radio
            theme={ThemeDefault}
            id="selectId1"
        />,
    );
    expect(radio.toJSON()).toMatchSnapshot();
});
