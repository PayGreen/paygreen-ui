import { transparentize } from 'polished';

/**
 * Return css gradient for reflection effect
 *
 * @param {string} color
 * @param {number} opacity in percents
 * @returns {string} linear-gradient
 */
function reflectionGradient(color, opacity = 40) {
    return (
        'linear-gradient(-70deg, ' +
        transparentize(1, color) +
        ' 40%, ' +
        transparentize(1 - opacity / 100, color) +
        ' 40% 60%, ' +
        transparentize(1, color) +
        ' 80%)'
    );
}

export { reflectionGradient };
