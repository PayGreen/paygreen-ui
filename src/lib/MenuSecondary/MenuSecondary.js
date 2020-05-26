import React from 'react';
import PropTypes from 'prop-types';
import {
    dotStyleOptions,
    iconSizeOptions,
    spaceOptions,
    colorPalletOptions,
    greyOptions,
} from '../../shared/constants';
import Dot from '../Dot/Dot';
import { MenuSecondaryBase } from './style';

const MenuSecondary = props => {
    return (
        <MenuSecondaryBase {...props}>
            <ul className="menu">
                {React.Children.map(props.children, (child, index) =>
                    child ? (
                        <li key={index} className="menuElement">
                            {index ? (
                                <Dot
                                    theme={props.theme} // not necessary, only needed for tests
                                    className="hideOnSmallScreen"
                                    dotStyle={dotStyleOptions.slashes}
                                    dotSize={iconSizeOptions.lg}
                                    colorPallet={colorPalletOptions.wab}
                                    colorWab={greyOptions.grey10}
                                    marginLeft={spaceOptions.xs}
                                    marginRight={spaceOptions.sm}
                                />
                            ) : null}
                            
                            {child}
                        </li>
                    ) : null,
                )}
            </ul>

            {props.closeComponent ? props.closeComponent : null}
        </MenuSecondaryBase>
    );
};

MenuSecondary.propTypes = {
    isOpen: PropTypes.bool,
    closeComponent: PropTypes.element,
};

MenuSecondary.defaultProps = {
    isOpen: PropTypes.false,
};

export default MenuSecondary;
