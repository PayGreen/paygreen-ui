import React from 'react'
import Link from './Link';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';

it('renders without crashing', () => {
    const link = TestRenderer.create(
        <a href="#">
            <Link theme={ThemeDefault}>
                Link text
            </Link>
        </a>
    );
    expect(link.toJSON()).toMatchSnapshot();
});