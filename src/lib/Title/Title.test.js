import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Title from './Title';

it('renders without crashing', () => {
    const title = TestRenderer.create(
        <Title theme={ThemeDefault}>
            Your title with <strong>an emphasis</strong>
        </Title>
    );
    expect(title.toJSON()).toMatchSnapshot();
});