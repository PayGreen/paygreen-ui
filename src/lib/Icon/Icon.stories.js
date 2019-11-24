import React from 'react';
import Icon from './Icon';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

storiesOf('Icon', module)
    .addDecorator(withKnobs)
    .add('Icon', () => (
        <Icon icon="arrow-bottom"/>
    ), {
        notes: '',
    });