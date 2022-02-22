import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaHelp from './DaHelp';
import { QuestionBoldIcon } from '../Icon/Icon';

it('renders without crashing', () => {
    const daHelp = TestRenderer.create(
        <DaHelp theme={ThemeDefault}>
            <QuestionBoldIcon theme={ThemeDefault} />
        </DaHelp>,
    );
    expect(daHelp.toJSON()).toMatchSnapshot();
});
