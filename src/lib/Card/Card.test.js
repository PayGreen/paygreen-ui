import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Text from '../Text/Text';
import Title from '../Title/Title';
import Card from './Card';

it('renders without crashing', () => {
    const card = TestRenderer.create(
        <Card theme={ThemeDefault}>
            <Title theme={ThemeDefault}>
                Content <strong>sample</strong>
            </Title>

            <Text theme={ThemeDefault}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales.
            </Text>

            <ButtonGroup theme={ThemeDefault}>
                <button type="button">
                    <Button theme={ThemeDefault}>
                        Your button
                    </Button>
                </button>
            </ButtonGroup>
        </Card>
    );
    expect(card.toJSON()).toMatchSnapshot();
});