import React from 'react';
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

export default {
    title: folder.form + 'InputCard',
    argTypes: {
        type: {
            name: labels.type,
            options: Object.values(multipleInputTypeOptions),
            control: 'radio',
            defaultValue: multipleInputTypeDefault,
        },
        blockSize: {
            name: sizeLabel,
            options: Object.values(inputCardSizeOptions),
            control: 'radio',
            defaultValue: inputCardSizeDefault,
        },
    },
};

export const InputCardStory = ({ type, blockSize, ...args }) => {
    return (
        <InternalGrid>
            <InputCard
                type={type}
                text="Option A"
                blockSize={blockSize}
                id={inputName + 1}
                name={inputName}
            >
                <SatchelIcon />
            </InputCard>

            <InputCard
                type={type}
                text="Option B with more text inside label"
                blockSize={blockSize}
                id={inputName + 2}
                name={inputName}
            >
                <ContractIcon />
            </InputCard>

            <InputCard
                type={type}
                text="Option C"
                blockSize={blockSize}
                id={inputName + 3}
                name={inputName}
            >
                <MegaphoneIcon />
            </InputCard>

            <InputCard
                type={type}
                text="Option D"
                blockSize={blockSize}
                id={inputName + 4}
                name={inputName}
            >
                <SupportIcon />
            </InputCard>
        </InternalGrid>
    );
};
