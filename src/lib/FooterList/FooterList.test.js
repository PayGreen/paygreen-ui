import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import FooterList from './FooterList';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <FooterList theme={ThemeDefault}>
            Something
            Something else
            Other element
        </FooterList>
    );
    expect(component.toJSON()).toMatchSnapshot();
});