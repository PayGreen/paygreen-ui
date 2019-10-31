import React from 'react'
import Title from './Title';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';

it('renders without crashing', () => {
    const title = TestRenderer.create(
        <Title theme={ThemeDefault}>
            Your title with <b>an emphasis</b>
        </Title>
    );
    expect(title.toJSON()).toMatchSnapshot();
})