import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    folder,
    spaceOptions,
    buttonSizeOptions,
    fontSizeOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import { PenIcon, ArrowBottomIcon } from '../Icon/Icon';
import Badge from '../Badge/Badge';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ClickableBlock from '../ClickableBlock/ClickableBlock';
import DaButton from '../DaButton/DaButton';
import Dropdown from './Dropdown';
import DropdownControl from './DropdownControl';
import Popin from '../Popin/Popin';
import Text from '../Text/Text';
import Title from '../Title/Title';

const popinContent = (
    <>
        <Title
            marginTop={spaceOptions.xs}
            marginLateral={spaceOptions.xs}
            textSize={fontSizeOptions.sm}
        >
            Popin's title
        </Title>

        <Text
            marginTop={spaceOptions.xs}
            marginLateral={spaceOptions.xs}
            marginBottom={spaceOptions.xs}
            textSize={fontSizeOptions.sm}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
    </>
);

const popinProps = {
    marginTop: spaceOptions.sm,
    blockWidth: spaceOptions.sm,
};

storiesOf(folder.popup + 'Dropdown', module)
    .addDecorator(withKnobs)
    .add('Dropdown with ClickableBlock', () => (
        <Dropdown>
            <ClickableBlock
                paddingLateral={spaceOptions.sm}
                paddingTop={spaceOptions.sm}
                paddingBottom={spaceOptions.sm}
            >
                <Text>Click here</Text>
            </ClickableBlock>

            <Popin {...popinProps}>{popinContent}</Popin>
        </Dropdown>
    ))
    .add('Dropdown with ClickableBlock and close button', () => (
        <Dropdown>
            <ClickableBlock
                paddingLateral={spaceOptions.sm}
                paddingTop={spaceOptions.sm}
                paddingBottom={spaceOptions.sm}
            >
                <Text>Click here</Text>
            </ClickableBlock>

            <Popin {...popinProps}>
                {popinContent}

                <ButtonGroup marginBottom={spaceOptions.sm}>
                    <DropdownControl>
                        <button type="button">
                            <DaButton buttonSize={buttonSizeOptions.sm}>
                                Close Me
                            </DaButton>
                        </button>
                    </DropdownControl>
                </ButtonGroup>
            </Popin>
        </Dropdown>
    ))
    .add(
        'Dropdown with Badge',
        () => (
            <Dropdown>
                <Badge
                    textSize={fontSizeOptions.xs}
                    htmlTag={iconHtmlTagOptions.button}
                >
                    Badge
                    <ArrowBottomIcon marginLeft={spaceOptions.xs} />
                </Badge>

                <Popin {...popinProps}>{popinContent}</Popin>
            </Dropdown>
        ),
        {},
    )
    .add(
        'Dropdown with Icon',
        () => (
            <Dropdown>
                <PenIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.lg}
                    hasBackground
                    hasHover
                />

                <Popin {...popinProps}>{popinContent}</Popin>
            </Dropdown>
        ),
        {},
    );
