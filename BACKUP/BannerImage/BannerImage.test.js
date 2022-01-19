import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import BannerImage from './BannerImage';
import photoFile from './sample/sample.png';

it('renders without crashing', () => {
    const bannerImage = TestRenderer.create(
        <BannerImage theme={ThemeDefault} image={photoFile}>
            <div>
                Something
            </div>
        </BannerImage>
    );
    expect(bannerImage.toJSON()).toMatchSnapshot();
});