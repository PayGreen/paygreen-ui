import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import { BreadcrumbBase } from './style';

class Breadcrumb extends PureComponent {
    render() {
        // Prevent current page reload if the user clicks on its link
        function preventCurrentPageClick(e) {
            if (e.target.getAttribute('tabindex') < 0) {
                e.preventDefault();
            }
        }

        const items = this.props.elements.map((element, index) =>
            <li key={index}>
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