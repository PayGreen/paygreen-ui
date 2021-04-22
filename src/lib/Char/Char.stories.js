import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, number } from '@storybook/addon-knobs';
import {
    folder,
    charModeOptions,
    charModeDefault,
} from '../../shared/constants';
import Char from './Char';

storiesOf(folder.text + 'Char', module)
    .addDecorator(withKnobs)
    .add('Char', () => (
        <Char
            text={text('Text', '0123 4567 89 ABC')}
            mode={radios('Mode', charModeOptions, charModeDefault)}
            truncateCharacter={text('Truncate character', '...')}
            hideCharacter={text('Hide character', '*')}
            hideExclusions={[text('Hide exclusion (only one here)', ' ')]}
            startLength={number('Start length', 3)}
            endLength={number('End length', 3)}
        />
    ));
