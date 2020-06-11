import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Dropdown from './Dropdown';
import { PenIcon } from '../Icon/Icon';
import Popin from '../Popin/Popin';
import Title from '../Title/Title';
import Text from '../Text/Text';

it('renders without crashing', () => {
    const dropdown = TestRenderer.create(
        <Dropdown theme={ThemeDefault}>
            <PenIcon theme={ThemeDefault} />

            <Popin theme={ThemeDefault}>
                <Title theme={ThemeDefault}>
                    Ma jolie <strong>Popin</strong> !
                </Title>

                <Text theme={ThemeDefault}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Text>
            </Popin>
        </Dropdown>,
    );
    expect(dropdown.toJSON()).toMatchSnapshot();
});
