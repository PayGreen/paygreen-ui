import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Link from '../Link/Link';
import FooterList from './FooterList';

const sampleLinks = [
    'New link',
    'Page with long title',
    'Link 78',
    'Fourth link'
];

storiesOf(folder.nav + folder.sub.footer + 'FooterList', module)
    .addDecorator(withKnobs)
    .add(
        'FooterList',
        () => (
            <FooterList
                textSize={select('Size', fontSizeOptions, fontSizeDefault)}
                align={radios('Align', alignOptions, alignDefault)}
                marginLateral={select(
                    "Lateral margins",
                    spaceOptions,
                    spaceDefault,
                )}
                marginTop={select(
                    "Margin top",
                    spaceOptions,
                    spaceDefault,
                )}
                marginBottom={select(
                    "Margin bottom",
                    spaceOptions,
                    spaceDefault,
                )}
            >
                {sampleLinks.map((link, index) => (
                    <a href="#" key={index}>
                        <Link hasUnderline={false}>{link}</Link>
                    </a>
                ))}
            </FooterList>
        )
    );