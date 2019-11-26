import React, { PureComponent } from 'react';
import { IconBase } from './style';

class IconWrapper extends PureComponent {
    render() {
        const {
            children,
            ...rest
        } = this.props;

        const Children = React.Children.map(children, child => {
            if (typeof child == 'object') {
                return React.cloneElement(child);
            }
        });

        return <IconBase {...rest}>
            {Children}
        </IconBase>;
    }
}

IconWrapper.propTypes = {

};

export default IconWrapper;