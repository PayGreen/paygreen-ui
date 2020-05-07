import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    text,
    radios,
    select,
} from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import Dot from './Dot';

storiesOf(folder.main + 'Dot', module)
    .addDecorator(withKnobs)
    .add('Dot', () => <Dot />);
