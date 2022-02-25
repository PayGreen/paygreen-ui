import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    inputCardSizeOptions,
    inputCardSizeDefault,
    multipleInputTypeOptions,
    multipleInputTypeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import {
    SatchelIcon,
    ContractIcon,
    MegaphoneIcon,
    SupportIcon,
} from '../Icon/Icon';
import InternalGrid from '../InternalGrid/InternalGrid';
import InputCard from './InputCard';

const sizeLabel = 'Size';
const inputName = 'choice';

storiesOf(folder.form + 'InputCard', module)
    .addDecorator(withKnobs)
    .add('InputCard', () => (
        <InternalGrid>
            <InputCard
                type={radios(
                    labels.type,
                    multipleInputTypeOptions,
                    multipleInputTypeDefault,
                )}
                text="Option A"
                blockSize={radios(
                    sizeLabel,
                    inputCardSizeOptions,
                    inputCardSizeDefault,
                )}
                id={inputName + 1}
                name={inputName}
            >
                <SatchelIcon />
            </InputCard>

            <InputCard
                type={radios(
                    labels.type,
                    multipleInputTypeOptions,
                    multipleInputTypeDefault,
                )}
                text="Option B with more text inside label"
                blockSize={radios(
                    sizeLabel,
                    inputCardSizeOptions,
                    inputCardSizeDefault,
                )}
                id={inputName + 2}
                name={inputName}
            >
                <ContractIcon />
            </InputCard>

            <InputCard
                type={radios(
                    labels.type,
                    multipleInputTypeOptions,
                    multipleInputTypeDefault,
                )}
                text="Option C"
                blockSize={radios(
                    sizeLabel,
                    inputCardSizeOptions,
                    inputCardSizeDefault,
                )}
                id={inputName + 3}
                name={inputName}
            >
                <MegaphoneIcon />
            </InputCard>

            <InputCard
                type={radios(
                    labels.type,
                    multipleInputTypeOptions,
                    multipleInputTypeDefault,
                )}
                text="Option D"
                blockSize={radios(
                    sizeLabel,
                    inputCardSizeOptions,
                    inputCardSizeDefault,
                )}
                id={inputName + 4}
                name={inputName}
            >
                <SupportIcon />
            </InputCard>
        </InternalGrid>
    ));
