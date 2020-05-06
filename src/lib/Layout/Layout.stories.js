import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import Layout from './Layout';

storiesOf(folder.nav + 'Layout', module)
    .addDecorator(withKnobs)
    .add('Layout', () => (
        <Layout isOpen={boolean('Open sidebar', true)}>
            <div>some content here</div>
        </Layout>
    ));
