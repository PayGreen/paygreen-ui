import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { textHtmlTagOptions } from '../../shared/constants';
import DataLegend from './DataLegend';

it('renders without crashing', () => {
    const dataLegend = TestRenderer.create(
        <>
            <DataLegend theme={ThemeDefault}>
                Lorem ipsum dolor sit amet, consectetur{' '}
                <strong>adipiscing elit</strong>. Donec eget{' '}
                <em>nulla in libero</em> laoreet sodales.
            </DataLegend>
            <DataLegend theme={ThemeDefault} htmlTag={textHtmlTagOptions.strong}>
                Lorem ipsum dolor sit amet, consectetur
            </DataLegend>
        </>,
    );
    expect(dataLegend.toJSON()).toMatchSnapshot();
});
