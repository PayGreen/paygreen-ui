import React from 'react';
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
import Popin from '../Popin/Popin';
import Text from '../Text/Text';
import Title from '../Title/Title';
import Dropdown from './Dropdown';
import DropdownControl from './DropdownControl';

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

export default {
    title: folder.popup + 'Dropdown',
};

export const DropdownClickableBlock = ({ hasOverlay }) => {
    return (
        <Dropdown hasOverlay={hasOverlay}>
            <ClickableBlock
                paddingLateral={spaceOptions.sm}
                paddingTop={spaceOptions.sm}
                paddingBottom={spaceOptions.sm}
            >
                <Text>Click here</Text>
            </ClickableBlock>

            <Popin {...popinProps}>
                {popinContent}

                {!hasOverlay ? (
                    <ButtonGroup marginBottom={spaceOptions.sm}>
                        <DropdownControl>
                            <button type="button">
                                <DaButton buttonSize={buttonSizeOptions.sm}>
                                    Close Me
                                </DaButton>
                            </button>
                        </DropdownControl>
                    </ButtonGroup>
                ) : null}
            </Popin>
        </Dropdown>
    );
};
export const DropdownWithBadge = () => (
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
);
export const DropdownWithIcon = () => (
    <Dropdown>
        <PenIcon
            htmlTag={iconHtmlTagOptions.button}
            iconSize={iconSizeOptions.lg}
            hasBackground
            hasHover
        />

        <Popin {...popinProps}>{popinContent}</Popin>
    </Dropdown>
);

DropdownClickableBlock.args = {
    hasOverlay: true,
};
