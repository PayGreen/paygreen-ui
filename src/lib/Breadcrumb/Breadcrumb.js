import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorOptions,
    colorDefault
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

        return <BreadcrumbBase {...this.props}>{items}</BreadcrumbBase>;
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
    color: PropTypes.oneOf(Object.values(colorOptions)),
};

Breadcrumb.defaultProps = {
    colorType: colorTypeDefault,
    color: colorDefault,
};

export default Breadcrumb;