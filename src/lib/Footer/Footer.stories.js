import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    decorationOptions,
    decorationDefault
} from '../../shared/constants';
import Footer from './Footer';

storiesOf(folder.template + 'Footer', module)
    .addDecorator(withKnobs)
    .add(
        'Footer',
        () => (
            <Footer
                topStyle={radios(
                    'Wave top direction',
                    decorationOptions,
                    decorationDefault,
                )}
            >
                Sample
            </Footer>
        )
    );