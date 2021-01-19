import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    colorPalletOptions,
    fontSizeOptions,
    iconSizeOptions,
    spaceOptions,
    alignOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import {
    CheckBoldIcon,
    CrossBoldIcon,
    ClockBoldIcon,
    ArrowBottomIcon,
    ListIcon,
} from '../Icon/Icon';
import Text from '../Text/Text';
import DaTableCell from '../DaTableCell/DaTableCell';
import DaTableRow from '../DaTableRow/DaTableRow';
import DaTableBody from '../DaTableBody/DaTableBody';
import DaTableHeadCell from '../DaTableHeadCell/DaTableHeadCell';
import DaTableHead from '../DaTableHead/DaTableHead';
import DaInput from '../DaInput/DaInput';
import Checkbox from '../Checkbox/Checkbox';
import DaTable from './DaTable';

const iconStyles = {
    iconSize: iconSizeOptions.xs,
    colorPallet: colorPalletOptions.status,
    marginRight: spaceOptions.xs,
};

const textStyles = {
    textSize: fontSizeOptions.xs,
    colorPallet: colorPalletOptions.status,
};

const status = {
    icon: {
        validated: (
            <CheckBoldIcon
                {...iconStyles}
                colorStatus={formStatusOptions.success}
            />
        ),
        waiting: (
            <ClockBoldIcon
                {...iconStyles}
                colorStatus={formStatusOptions.warning}
            />
        ),
        refused: (
            <CrossBoldIcon
                {...iconStyles}
                colorStatus={formStatusOptions.danger}
            />
        ),
    },
    text: {
        validated: (
            <Text {...textStyles} colorStatus={formStatusOptions.success}>
                Validated
            </Text>
        ),
        waiting: (
            <Text {...textStyles} colorStatus={formStatusOptions.warning}>
                Waiting
            </Text>
        ),
        refused: (
            <Text {...textStyles} colorStatus={formStatusOptions.danger}>
                Refused
            </Text>
        ),
    },
};

const sampleRows = [
    {
        date: '27/05/2020',
        name: 'Laurie Fils',
        amount: '341.90',
        type: 'Cash',
        status: 'waiting',
    },
    {
        date: '26/05/2020',
        name: 'Matt Uritay',
        amount: '23.41',
        type: 'Recurring',
        status: 'waiting',
    },
    {
        date: '25/05/2020',
        name: 'Pedro Madère',
        amount: '12.10',
        type: 'Cash',
        status: 'waiting',
    },
    {
        date: '24/05/2020',
        name: 'Alex Pert',
        amount: '70.85',
        type: 'Tokenize',
        status: 'validated',
    },
    {
        date: '23/05/2020',
        name: 'Benja Mince',
        amount: '54.50',
        type: 'Cash',
        status: 'validated',
    },
    {
        date: '22/05/2020',
        name: 'Benoît de Cajou',
        amount: '93.00',
        type: 'Cash',
        status: 'validated',
    },
    {
        date: '21/05/2020',
        name: 'Guy Home',
        amount: '9.25',
        type: 'Cash',
        status: 'validated',
    },
    {
        date: '20/05/2020',
        name: 'Raph Histolé',
        amount: '89.92',
        type: 'Tokenize',
        status: 'refused',
    },
    {
        date: '19/05/2020',
        name: 'Fa Nini',
        amount: '34.60',
        type: 'Recurring',
        status: 'validated',
    },
    {
        date: '18/05/2020',
        name: 'Pierrick Hochet',
        amount: '71.05',
        type: 'Cash',
        status: 'refused',
    },
];

storiesOf(folder.table + folder.sub.daTable + 'DaTable', module)
    .addDecorator(withKnobs)
    .add('DaTable', () => (
        <DaTable
            isLoading={boolean(labels.isLoading, false)}
            loadingRowNumber={sampleRows.length}
            blockWidth={select(
                labels.smallScreenWidth,
                spaceOptions,
                spaceOptions.md,
            )}
            marginLateral={select(
                labels.marginLateral,
                spaceOptions,
                spaceOptions.sm,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceOptions.sm)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceOptions.sm,
            )}
        >
            <DaTableHead>
                <DaTableHeadCell label="Select/deselect all">
                    <Checkbox id="select" />
                </DaTableHeadCell>

                <DaTableHeadCell label="ID" />

                <DaTableHeadCell
                    sortIcon={<ArrowBottomIcon title="Sort DESC on Date" />}
                    label="Date"
                />

                <DaTableHeadCell label="Name">
                    <DaInput
                        placeholder="Search name"
                        fieldSize="sm"
                        blockWidth="sm"
                    />
                </DaTableHeadCell>

                <DaTableHeadCell
                    sortIcon={
                        <ArrowBottomIcon
                            isActive={true}
                            title="Sort ASC on Amount"
                        />
                    }
                    label="Amount"
                />

                <DaTableHeadCell
                    groupIcon={<ListIcon title="Group by Type" />}
                    label="Type"
                />

                <DaTableHeadCell
                    groupIcon={<ListIcon title="Group by Status" />}
                    label="Status"
                />
            </DaTableHead>

            <DaTableBody>
                {!boolean(labels.isLoading, false) &&
                boolean('With data', true) ? (
                    sampleRows.map((sample, index) => (
                        <DaTableRow
                            key={index}
                            isActive={
                                !index ? boolean(labels.isActive, false) : false
                            }
                        >
                            <DaTableCell>
                                <Checkbox
                                    id={'checkbox' + index}
                                    checked={
                                        !index
                                            ? boolean(labels.isActive, false)
                                            : false
                                    }
                                    readOnly={true}
                                />
                            </DaTableCell>

                            <DaTableCell isId={true}>
                                {3400 + index}
                            </DaTableCell>

                            <DaTableCell isMain={false} label="Date">
                                {sample.date}
                            </DaTableCell>

                            <DaTableCell>{sample.name}</DaTableCell>

                            <DaTableCell>{sample.amount}&nbsp;€</DaTableCell>

                            <DaTableCell isMain={false} label="Type">
                                {sample.type}
                            </DaTableCell>

                            <DaTableCell isMain={false} label="Status">
                                {status.icon[sample.status]}
                                {status.text[sample.status]}
                            </DaTableCell>
                        </DaTableRow>
                    ))
                ) : (
                    <Text
                        textSize={fontSizeOptions.sm}
                        align={alignOptions.center}
                    >
                        Nothing to show ¯\_(ツ)_/¯
                    </Text>
                )}
            </DaTableBody>
        </DaTable>
    ));
