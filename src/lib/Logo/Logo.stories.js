import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    spaceOptions,
    hoverDirectionOptions,
    hoverDirectionDefault,
    colorTypeOptions,
} from '../../shared/constants';
import Badge from '../Badge/Badge';
import Logo from './Logo';
import { logo } from './sample/logo';

const isWhiteLabel = 'Is white';

storiesOf(folder.media + 'Logo', module)
    .addDecorator(withKnobs)
    .add('Logo', () => (
        <a href="#">
            <Logo
                hasBaseline={boolean('Has baseline', true)}
                hasHoverColor={boolean('Hover color', false)}
                isWhite={boolean(isWhiteLabel, false)}
                blockWidth={select('Width', spaceOptions, spaceOptions.md)}
                blockHeight={select('Height', spaceOptions, spaceOptions.none)}
            >
                {logo}
            </Logo>
        </a>
    ))
    .add('Logo with badge', () => (
        <a href="#">
            <Logo
                hasBaseline={false}
                isWhite={boolean(isWhiteLabel, false)}
                hoverDirection={radios(
                    'Hover direction',
                    hoverDirectionOptions,
                    hoverDirectionDefault,
                )}
                blockWidth={spaceOptions.sm}
                badge={
                    <Badge
                        colorType={
                            boolean(isWhiteLabel, false)
                                ? colorTypeOptions.reverse
                                : colorTypeOptions.original
                        }
                    >
                        Tree
                    </Badge>
                }
            >
                {logo}
            </Logo>
        </a>
    ));
