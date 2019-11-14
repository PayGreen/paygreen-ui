import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    textHtmlTagOptions,
    textHtmlTagDefault,
    blockPaddingOptions,
    blockPaddingDefault,
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import { TextBase } from './style';

class Text extends PureComponent {
    render() {
        return <TextBase
            as={this.props.textHtmlTag}
            {...this.props}
        >
            {this.props.children}
        </TextBase>;
    }
}

Text.propTypes = {
    textHtmlTag: PropTypes.oneOf(Object.values(textHtmlTagOptions)),
    paddingBlock: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    marginBlock: PropTypes.oneOf(Object.values(spaceOptions)),
    marginInternal: PropTypes.oneOf(Object.values(spaceOptions)),
};

Text.defaultProps = {
    textHtmlTag: textHtmlTagDefault,
    paddingBlock: blockPaddingDefault,
    marginBlock: spaceDefault,
    marginInternal: spaceOptions.sm,
};

export default Text;