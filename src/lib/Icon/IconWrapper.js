import React, { PureComponent } from 'react';

class IconWrapper extends PureComponent {
    render() {
        const {children, ...rest} = this.props;

        const Children = React.Children.map(children, child => {
            if (typeof child == 'object') {
                return React.cloneElement(child, {
                    fill: rest.fill,
                    height: '20px',
                    width: '20px'
                });
            }
        });

        return (
            <React.Fragment>
                {Children}
            </React.Fragment>
        );
    }
}

IconWrapper.propTypes = {

};

export default IconWrapper;