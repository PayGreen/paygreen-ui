import React from 'react'
import Button from './Button';
import TestRenderer from 'react-test-renderer'; // ES6
import { ThemeDefault } from '../../theme';

it('renders without crashing', () => {
    const button = TestRenderer.create(
        <Button
            theme={ThemeDefault}
            template='fill'
            type='original'
            color='primary'
            size='md'
        >
            CTA button
        </Button>
    );
    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();
})