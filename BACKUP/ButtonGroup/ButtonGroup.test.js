import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { buttonStyleOptions } from '../../shared/constants';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

it('renders without crashing', () => {
    const buttonGroup = TestRenderer.create(
        <ButtonGroup theme={ThemeDefault}>
            <button type="button">
                <Button
                    theme={ThemeDefault}
                    buttonStyle={buttonStyleOptions.line}
                >
                    First button
                </Button>
            </button>

            <button type="button">
                <Button theme={ThemeDefault}>
                    Second button
                </Button>
            </button>
        </ButtonGroup>
    );
    expect(buttonGroup.toJSON()).toMatchSnapshot();
});