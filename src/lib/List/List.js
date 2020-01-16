import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    listStyleOptions,
    listStyleDefault,
    iconSizeOptions,
    iconSizeDefault,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import { ListBase } from './style';
import { dashed } from './style/dashed';

class List extends PureComponent {
    render() {
        const dashedTop = <span className="dashed top">{dashed}</span>;
        const dashedBottom = <span className="dashed bottom">{dashed}</span>;

        return <ListBase
            as={this.props.listStyle === listStyleOptions.number ? 'ol' : 'ul'}
            {...this.props}
        >
            {React.Children.map(this.props.children, (child, index) =>
                child ?
                    <li key={index}>
                        {this.props.hasDashed && index%2 ? dashedTop : null}

                        {React.cloneElement(child, { number: index + 1 })}

                        {this.props.hasDashed && index%2
                        && (index + 1 < this.props.children.length) ?
                            dashedBottom :
                            null
                        }
                    </li>
                    : null
            )}
        </ListBase>;
    }
}

List.propTypes = {
    listStyle: PropTypes.oneOf(Object.values(listStyleOptions)),
    hasDashed: PropTypes.bool,
    bulletSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

List.defaultProps = {
    listStyle: listStyleDefault,
    hasDashed: false,
    bulletSize: iconSizeDefault,
    colorTheme: colorThemeDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default List;