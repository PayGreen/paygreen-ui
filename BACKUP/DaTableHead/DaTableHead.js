import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    fontSizeOptions,
    rotateSizeOptions,
    colorPalletOptions,
    iconSizeOptions,
    alignItemsOptions,
    greyOptions,
} from '../../shared/constants';
import InternalGrid from '../InternalGrid/InternalGrid';
import Title from '../Title/Title';
import { ArrowBottomIcon } from '../Icon/Icon';
import { DaTableHeadBase } from './style';

const DaTableHead = props => {
    const [headOpen, setHeadOpen] = useState(false);

    return (
        <DaTableHeadBase {...props} isHeadOpen={headOpen}>
            <InternalGrid
                theme={props.theme} // not necessary, only needed for tests
                alignItems={alignItemsOptions.center}
                onClick={() => setHeadOpen(!headOpen)}
            >
                <Title
                    theme={props.theme} // not necessary, only needed for tests
                    textSize={fontSizeOptions.xs}
                    colorWab={greyOptions.grey50}
                >
                    {props.blockTitle}
                </Title>

                <ArrowBottomIcon
                    theme={props.theme} // not necessary, only needed for tests
                    iconSize={iconSizeOptions.md}
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey60}
                    rotateSize={
                        headOpen ? rotateSizeOptions.d180 : rotateSizeOptions.d0
                    }
                />
            </InternalGrid>

            {props.children}
        </DaTableHeadBase>
    );
};

DaTableHead.propTypes = {
    blockTitle: PropTypes.string,
};

DaTableHead.defaultProps = {
    blockTitle: 'Search and filters',
};

export default DaTableHead;
