import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    hoverDirectionOptions,
    hoverDirectionDefault,
    spaceOptions,
    alignOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Badge from '../Badge/Badge';
import Logo from './Logo';
import { logo } from './sample/logo';

storiesOf(folder.media + 'Logo', module)
    .addDecorator(withKnobs)
    .add('Logo', () => (
        <a href="#">
            <Logo
                hasBaseline={boolean('Has baseline', true)}
                badge={boolean('With Badge', false) ? <Badge>Tree</Badge> : null}
                isWhite={boolean('Is white', false)}
                hasThemeColor={boolean('Has theme color', false)}
                blockWidth={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.sm,
                )}
                blockHeight={select(
                    labels.blockHeight,
                    spaceOptions,
                    spaceOptions.none,
                )}
                align={select(labels.align, alignOptions, alignOptions.center)}
                hasHoverColor={boolean('Has hover color', false)}
                hoverDirection={radios(
                    'Hover direction',
                    hoverDirectionOptions,
                    hoverDirectionDefault,
                )}
            >
                {logo}
            </Logo>
        </a>
    ));
