import PropTypes from 'prop-types';
import { charModeOptions, charModeDefault } from '../../shared/constants';

const Char = ({
    text,
    mode,
    truncateCharacter,
    hideCharacter,
    hideExclusions,
    startLength,
    endLength,
}) => {
    const startString = text.substring(0, startLength);
    const endString = text.substring(text.length - endLength, text.length);

    switch (mode) {
        case charModeOptions.truncate:
            // we don't truncate string if it's short enough
            if (text.length > startLength + endLength + 1) {
                return startString + truncateCharacter + endString;
            }

            return text;

        case charModeOptions.hide:
            if (text.length > startLength + endLength) {
                const otherCharacters = text
                    .substring(startLength, text.length - endLength)
                    .split('');
                let hiddenString = '';

                // we check for every character if we must hide it or not (some character must be displayed, as space for example)
                otherCharacters.forEach(char => {
                    hiddenString += hideExclusions.includes(char)
                        ? char
                        : hideCharacter;
                });

                return startString + hiddenString + endString;
            }

            return text;

        default:
            return null;
    }
};

Char.propTypes = {
    text: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(Object.values(charModeOptions)),
    truncateCharacter: PropTypes.string,
    hideCharacter: PropTypes.string,
    hideExclusions: PropTypes.array,
    startLength: PropTypes.number,
    endLength: PropTypes.number,
};

Char.defaultProps = {
    mode: charModeDefault,
    truncateCharacter: '...',
    hideCharacter: '*',
    hideExclusions: [' '],
    startLength: 3,
    endLength: 3,
};

export default Char;
