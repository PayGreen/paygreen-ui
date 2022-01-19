import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Grid from './Grid';

it('renders without crashing', () => {
    const grid = TestRenderer.create(
        <Grid theme={ThemeDefault}>
            <div>Something</div>

            <div>Something</div>

            <div>Something</div>
        </Grid>
    );
    expect(grid.toJSON()).toMatchSnapshot();
});