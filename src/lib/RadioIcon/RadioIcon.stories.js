import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    radioSizeOptions,
    radioSizeDefault
} from '../../shared/constants';
import { SatchelIcon, ContractIcon } from '../Icon/Icon';
import RadioIcon from './RadioIcon';

const sizeLabel = 'Size';

storiesOf('RadioIcon', module).addDecorator(withKnobs)
.add('RadioIcon', () => (
    <div>
        <RadioIcon
            text="Option A"
            blockSize={radios(sizeLabel, radioSizeOptions, radioSizeDefault)}
        >
            <SatchelIcon />
        </RadioIcon>

        <RadioIcon
            text="Option B with more text inside label"
            blockSize={radios(sizeLabel, radioSizeOptions, radioSizeDefault)}
            >
            <ContractIcon />
        </RadioIcon>
    </div>
));