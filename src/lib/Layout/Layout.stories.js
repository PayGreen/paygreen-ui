import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder, spaceOptions } from '../../shared/constants';
import Layout from './Layout';

const mainMenuIsOpenLabel = 'Open sidebar';

storiesOf(folder.nav + 'Layout', module)
    .addDecorator(withKnobs)
    .add('Layout', () => (
        <Layout isOpen={boolean(mainMenuIsOpenLabel, true)}>
            <div>some content here</div>
        </Layout>
    ));
