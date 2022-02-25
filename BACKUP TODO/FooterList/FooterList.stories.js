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
import labels from '../../shared/labels';
import Link from '../Link/Link';
import FooterList from './FooterList';

const sampleLinks = [
    'New link',
    'Page with long title',
    'Link 78',
    'Fourth link',
];

storiesOf(folder.layout + folder.sub.footer + 'FooterList', module)
    .addDecorator(withKnobs)
    .add('FooterList', () => (
        <FooterList
            textSize={select(labels.textSize, fontSizeOptions, fontSizeDefault)}
            align={radios(labels.align, alignOptions, alignDefault)}
            marginLateral={select(
                labels.marginLateral,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
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
    ));
