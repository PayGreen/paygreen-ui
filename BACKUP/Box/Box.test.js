import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Box from './Box';

it('renders without crashing', () => {
    const box = TestRenderer.create(
        <Box theme={ThemeDefault}>
            <div>Premier élément</div>
            <Box theme={ThemeDefault}>
                <div>Deuxième élément</div>
            </Box>
        </Box>,
    );
    expect(box.toJSON()).toMatchSnapshot();
});
