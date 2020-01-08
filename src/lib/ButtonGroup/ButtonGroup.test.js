import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { buttonStyleOptions } from '../../shared/constants';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

it('renders without crashing', () => {
    const buttonGroup = TestRenderer.create(
        <ButtonGroup theme={ThemeDefault}>
            <a href="#">
                <Button
                    theme={ThemeDefault}
                    template={buttonStyleOptions.line}
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