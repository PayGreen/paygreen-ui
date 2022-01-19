import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import drawFile from './sample/sample.svg';
import Image from './Image';

it('renders without crashing', () => {
    const image = TestRenderer.create(
        <Image theme={ThemeDefault}>
            <img src={drawFile} alt="drawing" />
        </Image>
    );
    expect(image.toJSON()).toMatchSnapshot();
});