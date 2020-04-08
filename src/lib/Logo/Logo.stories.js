import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { folder, spaceOptions } from '../../shared/constants';
import Logo from './Logo';
import { logo } from './sample/logo';

storiesOf(folder.media + 'Logo', module)
    .addDecorator(withKnobs)
    .add('Logo', () => (
        <a href="#">
            <Logo
                hasBaseline={boolean('With baseline', true)}
                isWhite={boolean('White', false)}
                hasHoverRight={boolean('Hover right', true)}
                hasHoverTop={boolean('Hover top', false)}
                hasHoverColor={boolean('Hover color', false)}
                blockWidth={select('Width', spaceOptions, spaceOptions.none)}
                blockHeight={select('Height', spaceOptions, spaceOptions.none)}
            >
                {logo}
            </Logo>
        </a>
    ));
