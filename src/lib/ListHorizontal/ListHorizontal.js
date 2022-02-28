import React from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
    iconSizeOptions,
} from '../../shared/constants';
import Dot from '../Dot/Dot';
import { ListHorizontalBase } from './style';

const ListHorizontal = props => (
    <ListHorizontalBase {...props}>
        {React.Children.map(props.children, (child, index) =>
            child ? (
                <li key={index}>
                    {index ? (
                        <Dot
                            theme={props.theme} // not necessary, only needed for tests
                            dotSize={iconSizeOptions.xs}
                            colorType={props.colorType}
                            colorPallet={props.colorPallet}
                            colorTheme={props.colorTheme}
                            colorWab={props.colorWab}
                            colorStatus={props.colorStatus}
                            marginLeft={spaceOptions.md}
                            marginRight={spaceOptions.md}
                        />
                    ) : null}
                    {child}
                </li>
            ) : null,
        )}
    </ListHorizontalBase>
);

ListHorizontal.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),

    align: PropTypes.oneOf(Object.values(alignOptions)),
    hasBackground: PropTypes.bool,

    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),

    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

ListHorizontal.defaultProps = {
    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey20,
    colorStatus: formStatusDefault,

    align: alignDefault,
    hasBackground: false,

    paddingLateral: spaceDefault,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,

    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default ListHorizontal;
