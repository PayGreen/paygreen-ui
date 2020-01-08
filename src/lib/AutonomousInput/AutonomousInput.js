import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
    spaceOptions,
    colorPalletOptions
} from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import { AutonomousInputBase } from './style';

class AutonomousInput extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value !== undefined ? props.value : '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {
            status,
            submittedText,
            children,
            ...rest
        } = this.props;

        const submittedBlock = <span>
            <CheckBoldIcon
                theme={this.props.theme} // not necessary, only needed for tests
                iconSize={iconSizeOptions.xs}
                marginRight={spaceOptions.sm}
                colorPallet={colorPalletOptions.status}
                colorStatus={status}
            />
            {submittedText}
        </span>;

        return <AutonomousInputBase
            theme={this.props.theme} // not necessary, only needed for tests
            status={status}
        >
            <div>
                <input
                    {...rest}
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                {children}
            </div>

            {status === formStatusOptions.success && submittedText.length ?
                submittedBlock : null}
        </AutonomousInputBase>;
    }
}

AutonomousInput.propTypes = {
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    submittedText: PropTypes.string
};

AutonomousInput.defaultProps = {
    status: formStatusDefault,
    submittedText: 'Submitted!'
};

export default AutonomousInput;