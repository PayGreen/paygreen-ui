import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    radioSizeOptions,
    radioSizeDefault
} from '../../shared/constants';
import {
    SatchelIcon,
    ContractIcon,
    MegaphoneIcon,
    SupportIcon
} from '../Icon/Icon';
import Grid from '../Grid/Grid';
import RadioIcon from './RadioIcon';

const sizeLabel = 'Size';
const nameIcon = 'radioIcon';

storiesOf('RadioIcon', module).addDecorator(withKnobs)
.add('RadioIcon', () => (
    <Grid>
        <RadioIcon
            text="Option A"
            blockSize={radios(sizeLabel, radioSizeOptions, radioSizeDefault)}
            id={nameIcon + 1}
            name={nameIcon}
        >
            <SatchelIcon />
        </RadioIcon>

        <RadioIcon
            text="Option B with more text inside label"
            blockSize={radios(sizeLabel, radioSizeOptions, radioSizeDefault)}
            id={nameIcon + 2}
            name={nameIcon}
        >
            <ContractIcon />
        </RadioIcon>

        <RadioIcon
            text="Option C"
            blockSize={radios(sizeLabel, radioSizeOptions, radioSizeDefault)}
            id={nameIcon + 3}
            name={nameIcon}
        >
            <MegaphoneIcon />
        </RadioIcon>

        <RadioIcon
            text="Option D"
            blockSize={radios(sizeLabel, radioSizeOptions, radioSizeDefault)}
            id={nameIcon + 4}
            name={nameIcon}
        >
            <SupportIcon />
        </RadioIcon>
    </Grid>
));