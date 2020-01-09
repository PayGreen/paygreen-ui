import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    textHtmlTagOptions,
    fontSizeOptions,
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import Text from '../Text/Text';
import Link from '../Link/Link';
import ListHorizontal from './ListHorizontal';

storiesOf('ListHorizontal', module).addDecorator(withKnobs)
.add('ListHorizontal of Texts', () => (
    <ListHorizontal
        marginLateral={select('Lateral margins', spaceOptions, spaceDefault)}
        marginTop={select('Margin top', spaceOptions, spaceDefault)}
        marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
    >
        <Text
            htmlTag={textHtmlTagOptions.span}
            textSize={fontSizeOptions.xs}
        >
            Sample
        </Text>
    </ListHorizontal>
))
.add('ListHorizontal of Links', () => (
    <ListHorizontal
        paddingLateral={select('Lateral paddings', spaceOptions, spaceDefault)}
        paddingTop={select('Padding top', spaceOptions, spaceDefault)}
        paddingBottom={select('Padding bottom', spaceOptions, spaceDefault)}
    >
        <a href="#">
            <Link
                hasUppercase={true}
                hasUnderline={false}
            >
                Sample
            </Link>
        </a>
    </ListHorizontal>
));