import React from 'react'
import Image from './Image';
import drawFile from './sample/sample.svg';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';

it('renders without crashing', () => {
    const image = TestRenderer.create(
        <Image theme={ThemeDefault}>
            <img src={drawFile} alt="drawing" />
        </Image>
    );
    expect(image.toJSON()).toMatchSnapshot();
});