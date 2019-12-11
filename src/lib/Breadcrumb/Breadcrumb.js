import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault,

    colorPalletOptions,
    spaceOptions,
    iconSizeOptions,
    greyOptions
} from '../../shared/constants';
import { ArrowRightIcon } from '../Icon/Icon';
import { BreadcrumbBase } from './style';

class Breadcrumb extends PureComponent {
    render() {
        // Prevent current page reload if the user clicks on its link
        function preventCurrentPageClick(e) {
            if (e.target.getAttribute('tabindex') < 0) {
                e.preventDefault();
            }
        }

        const arrowIcon = <ArrowRightIcon
            theme={this.props.theme} // not necessary, only needed for tests
            iconSize={iconSizeOptions.xs}
            marginLeft={spaceOptions.xs}
            marginRight={spaceOptions.sm}
            colorPallet={colorPalletOptions.wab}
            colorWab={this.props.colorType === colorTypeOptions.reverse ? greyOptions.white00 : greyOptions.grey30}
        />;

        const items = this.props.elements.map((element, index) =>
            <li key={index}>
                {index ? arrowIcon : null}

                <a
                    href={element.url}
                    tabIndex={index + 1 === this.props.elements.length ? -1 : 0}
                    onClick={preventCurrentPageClick}
                >
                    {element.label}
                </a>
            </li>
        );

        return <BreadcrumbBase
            theme={this.props.theme} // not necessary, only needed for tests
            colorType={this.props.colorType}
            colorTheme={this.props.colorTheme}
        >
            {items}
        </BreadcrumbBase>;
    }
}

Breadcrumb.propTypes = {
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

Breadcrumb.defaultProps = {
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
};

export default Breadcrumb;