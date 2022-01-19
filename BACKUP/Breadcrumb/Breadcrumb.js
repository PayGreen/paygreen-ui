import React from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    spaceOptions,
    spaceDefault,
    iconSizeOptions,
} from '../../shared/constants';
import { ArrowRightIcon } from '../Icon/Icon';
import { BreadcrumbBase } from './style';

const Breadcrumb = props => {
    // Prevent current page reload if the user clicks on its link
    function preventCurrentPageClick(e) {
        if (e.target.getAttribute('tabindex') < 0) {
            e.preventDefault();
        }
    }

    const { elements, ...rest } = props;

    const arrowIcon = (
        <ArrowRightIcon
            theme={props.theme} // not necessary, only needed for tests
            iconSize={iconSizeOptions.xs}
            marginLeft={spaceOptions.xs}
            marginRight={spaceOptions.sm}
            colorPallet={colorPalletOptions.wab}
            colorWab={
                props.colorType === colorTypeOptions.reverse
                    ? greyOptions.white00
                    : greyOptions.grey30
            }
        />
    );

    return (
        <BreadcrumbBase {...rest}>
            {elements.map((element, index) => (
                <li key={index}>
                    {index ? arrowIcon : null}

                    <a
                        href={element.url}
                        tabIndex={
                            index + 1 === props.elements.length ? -1 : 0
                        }
                        onClick={preventCurrentPageClick}
                    >
                        {element.label}
                    </a>
                </li>
            ))}
        </BreadcrumbBase>
    );
};

Breadcrumb.propTypes = {
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Breadcrumb.defaultProps = {
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
    marginLateral: spaceDefault,
    marginTop: spaceOptions.xs,
    marginBottom: spaceOptions.xs,
};

export default Breadcrumb;
