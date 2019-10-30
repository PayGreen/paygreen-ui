import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    typeOptions,
    typeDefault,
    colorOptions,
    colorDefault
} from '../../shared/const';
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
    type: PropTypes.oneOf(Object.values(typeOptions)),
    color: PropTypes.oneOf(Object.values(colorOptions)),
};

Breadcrumb.defaultProps = {
    type: typeDefault,
    color: colorDefault,
};

export default Breadcrumb;