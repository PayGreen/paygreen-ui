import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { buttonTemplateOptions } from '../../shared/constants';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

it('renders without crashing', () => {
    const buttonGroup = TestRenderer.create(
        <ButtonGroup theme={ThemeDefault}>
            <a href="#">
                <Button
                    theme={ThemeDefault}
                    template={buttonTemplateOptions.line}
                >
                    First button
                </Button>
            </a>

            <a href="#">
                <Button theme={ThemeDefault}>
                    Second button
                </Button>
            </a>
        </ButtonGroup>
    );
    expect(buttonGroup.toJSON()).toMatchSnapshot();
});