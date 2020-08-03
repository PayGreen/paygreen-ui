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
} from '../../shared/constants';
import {
    CheckBoldIcon,
    CrossBoldIcon,
    ClockBoldIcon,
    ArrowBottomIcon,
    MenuIcon,
} from '../Icon/Icon';
import Text from '../Text/Text';
import DaTableCell from '../DaTableCell/DaTableCell';
import DaTableRow from '../DaTableRow/DaTableRow';
import DaTableBody from '../DaTableBody/DaTableBody';
import DaTableHeadCell from '../DaTableHeadCell/DaTableHeadCell';
import DaTableHead from '../DaTableHead/DaTableHead';
import DaInput from '../DaInput/DaInput';
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
        name: 'Pierrick Aimor-Tis',
        amount: '71.05',
        type: 'Cash',
        status: 'refused',
    },
];

const isActiveLabel = 'First line active';

storiesOf(folder.tables + folder.sub.daTable + 'DaTable', module)
    .addDecorator(withKnobs)
    .add(
        'DaTable',
        () => (
            <DaTable
                marginLateral={select(
                    'Lateral margins',
                    spaceOptions,
                    spaceOptions.sm,
                )}
                marginTop={select('Margin top', spaceOptions, spaceOptions.sm)}
                marginBottom={select(
                    'Margin bottom',
                    spaceOptions,
                    spaceOptions.sm,
                )}
            >
                <DaTableHead resultsLabel="10 results">
                    <DaTableHeadCell
                        isCheckbox={true}
                        label="Select/deselect all"
                    >
                        <input type="checkbox" style={{ display: 'block' }} />
                    </DaTableHeadCell>

                    <DaTableHeadCell label="ID" />

                    <DaTableHeadCell
                        sortIcon={<ArrowBottomIcon title="Sort DESC on Date" />}
                        label="Date"
                    />

                    <DaTableHeadCell label="Name">
                        <DaInput placeholder="Search" fieldSize="sm" />
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
                        groupIcon={<MenuIcon title="Group by Type" />}
                        label="Type"
                    />

                    <DaTableHeadCell
                        groupIcon={<MenuIcon title="Group by Status" />}
                        label="Status"
                    />
                </DaTableHead>

                <DaTableBody>
                    {sampleRows.map((sample, index) => (
                        <DaTableRow
                            key={index}
                            isActive={
                                !index ? boolean(isActiveLabel, false) : false
                            }
                        >
                            <DaTableCell isCheckbox={true}>
                                <input
                                    type="checkbox"
                                    checked={
                                        !index
                                            ? boolean(isActiveLabel, false)
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
                    ))}
                </DaTableBody>
            </DaTable>
        ),
        {
            notes:
                'input search is not functional, it is used here only for layout purpose',
        },
    );
