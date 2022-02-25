import React from 'react';
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

export default {
    title: folder.layout + folder.sub.footer + 'FooterList',
    argTypes: {
        textSize: {
            name: labels.textSize,
            options: Object.values(fontSizeOptions),
            control: 'select',
        },
        align: {
            name: labels.align,
            options: Object.values(alignOptions),
            control: 'radio',
        },
        marginLateral: {
            name: labels.marginLateral,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        marginTop: {
            name: labels.marginTop,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        marginBottom: {
            name: labels.marginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
        },
    },
};

export const SimpleFooterList = args => (
    <FooterList {...args}>
        {sampleLinks.map((link, index) => (
            <a href="#" key={index}>
                <Link hasUnderline={false}>{link}</Link>
            </a>
        ))}
    </FooterList>
);

SimpleFooterList.args = {
    textSize: fontSizeDefault,
    align: alignDefault,
    marginBottom: spaceDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
};
