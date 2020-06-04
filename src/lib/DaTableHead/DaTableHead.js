import React from 'react';
import PropTypes from 'prop-types';
import {
    fontSizeOptions,
    iconHtmlTagOptions,
    colorPalletOptions,
    iconSizeOptions,
    alignItemsOptions,
    greyOptions,
    spaceOptions,
} from '../../shared/constants';
import InternalGrid from '../InternalGrid/InternalGrid';
import Title from '../Title/Title';
import Text from '../Text/Text';
import { ArrowBottomIcon } from '../Icon/Icon';
import { DaTableHeadBase } from './style';

const DaTableHead = props => {
    return (
        <DaTableHeadBase {...props}>
            <div className="row">
                <InternalGrid alignItems={alignItemsOptions.center}>
                    <Title
                        textSize={fontSizeOptions.xxs}
                        colorWab={greyOptions.grey50}
                    >
                        {props.blockTitle}
                    </Title>

                    <ArrowBottomIcon
                        htmlTag={iconHtmlTagOptions.button}
                        iconSize={iconSizeOptions.md}
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey60}
                    />
                </InternalGrid>

                {props.children}
            </div>

            {props.resultsLabel ? (
                <Text
                    textSize={fontSizeOptions.sm}
                    align={alignItemsOptions.center}
                    marginBottom={spaceOptions.xs}
                >
                    {props.resultsLabel}
                </Text>
            ) : null}
        </DaTableHeadBase>
    );
};

DaTableHead.propTypes = {
    blockTitle: PropTypes.string,
    resultsLabel: PropTypes.string,
};

DaTableHead.defaultProps = {
    blockTitle: 'Search and filters',
    resultsLabel: null,
};

export default DaTableHead;
