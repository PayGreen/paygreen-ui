import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    fontSizeOptions,
    rotateSizeOptions,
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

class DaTableHead extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            headOpen: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ headOpen: !this.state.headOpen });
    }

    render() {
        return (
            <DaTableHeadBase {...this.props} isHeadOpen={this.state.headOpen}>
                <InternalGrid
                    alignItems={alignItemsOptions.center}
                    onClick={this.handleClick}
                >
                    <Title
                        textSize={fontSizeOptions.xxs}
                        colorWab={greyOptions.grey50}
                    >
                        {this.props.blockTitle}
                    </Title>

                    <ArrowBottomIcon
                        iconSize={iconSizeOptions.md}
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey60}
                        rotateSize={
                            this.state.headOpen
                                ? rotateSizeOptions.d180
                                : rotateSizeOptions.d0
                        }
                    />
                </InternalGrid>

                {this.props.children}

                {this.props.resultsLabel ? (
                    <Text
                        textSize={fontSizeOptions.xs}
                        align={alignItemsOptions.center}
                    >
                        {this.props.resultsLabel}
                    </Text>
                ) : null}
            </DaTableHeadBase>
        );
    }
}

DaTableHead.propTypes = {
    blockTitle: PropTypes.string,
    resultsLabel: PropTypes.string,
};

DaTableHead.defaultProps = {
    blockTitle: 'Search and filters',
    resultsLabel: null,
};

export default DaTableHead;
