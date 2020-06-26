import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { folder, formStatusOptions } from '../../shared/constants';

storiesOf(folder.form + 'FormControl', module)
    .addDecorator(withKnobs)
    .add('Form Control', () => <FormControl></FormControl>);
