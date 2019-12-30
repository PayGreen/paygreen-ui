import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    listStyleOptions,
    listStyleDefault,
    dashedOptions,
    dashedDefault,
    iconSizeOptions,
    iconSizeDefault,
    colorThemeOptions,
    colorThemeDefault,
    blockSpaceOptions,
    blockSpaceDefault
} from '../../shared/constants';
import { ListBase } from './style';
import { dashed } from './style/dashed';

class List extends PureComponent {
    render() {
        const dashedTop = <span className="dashed top">
            {dashed[this.props.dashed]}
        </span>;

        const dashedBottom = <span className="dashed bottom">
            {dashed[this.props.dashed]}
        </span>;

        return <ListBase
            as={this.props.listStyle === listStyleOptions.number ? 'ol' : 'ul'}
            {...this.props}
        >
            
            {React.Children.map(this.props.children, (child, index) =>
                <li key={index}>
                    {index%2 ? dashedTop : null}

                    {React.cloneElement(child, { number: index + 1 })}

                    {index%2 && (index + 1 < this.props.children.length) ?
                        dashedBottom :
                        null
                    }
                </li>
            )}
        </ListBase>;
    }
}

List.propTypes = {
    listStyle: PropTypes.oneOf(Object.values(listStyleOptions)),
    dashed: PropTypes.oneOf(Object.values(dashedOptions)),
    bulletSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    marginLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockSpaceOptions)),
};

List.defaultProps = {
    listStyle: listStyleDefault,
    dashed: dashedDefault,
    bulletSize: iconSizeDefault,
    colorTheme: colorThemeDefault,
    marginLateral: blockSpaceDefault,
    marginTop: blockSpaceDefault,
    marginBottom: blockSpaceDefault,
};

export default List;