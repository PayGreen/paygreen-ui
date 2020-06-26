import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { folder, formStatusOptions } from '../../shared/constants';
import FormControl from './FormControl';

storiesOf(folder.form + 'FormControl', module)
    .addDecorator(withKnobs)
    .add('Form Control with input + message', () => <FormControl></FormControl>)
    .add('Form Control with checkbox', () => <FormControl></FormControl>)

