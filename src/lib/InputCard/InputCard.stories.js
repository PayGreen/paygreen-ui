import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    radioSizeOptions,
    radioSizeDefault,
    inputHtmlTagOptions,
    inputHtmlTagDefault,
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

storiesOf(folder.form + folder.sub.form + 'InputCard', module)
    .addDecorator(withKnobs)
    .add('InputCard', () => (
        <InternalGrid>
            <InputCard
                htmlTag={radios(
                    labels.htmlTag,
                    inputHtmlTagOptions,
                    inputHtmlTagDefault,
                )}
                text="Option A"
                blockSize={radios(
                    sizeLabel,
                    radioSizeOptions,
                    radioSizeDefault,
                )}
                id={inputName + 1}
                name={inputName}
            >
                <SatchelIcon />
            </InputCard>

            <InputCard
                htmlTag={radios(
                    labels.htmlTag,
                    inputHtmlTagOptions,
                    inputHtmlTagDefault,
                )}
                text="Option B with more text inside label"
                blockSize={radios(
                    sizeLabel,
                    radioSizeOptions,
                    radioSizeDefault,
                )}
                id={inputName + 2}
                name={inputName}
            >
                <ContractIcon />
            </InputCard>

            <InputCard
                htmlTag={radios(
                    labels.htmlTag,
                    inputHtmlTagOptions,
                    inputHtmlTagDefault,
                )}
                text="Option C"
                blockSize={radios(
                    sizeLabel,
                    radioSizeOptions,
                    radioSizeDefault,
                )}
                id={inputName + 3}
                name={inputName}
            >
                <MegaphoneIcon />
            </InputCard>

            <InputCard
                htmlTag={radios(
                    labels.htmlTag,
                    inputHtmlTagOptions,
                    inputHtmlTagDefault,
                )}
                text="Option D"
                blockSize={radios(
                    sizeLabel,
                    radioSizeOptions,
                    radioSizeDefault,
                )}
                id={inputName + 4}
                name={inputName}
            >
                <SupportIcon />
            </InputCard>
        </InternalGrid>
    ));
