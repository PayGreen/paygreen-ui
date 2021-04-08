/**
 * @description to adjust value length and limit up to 3 numbers
 * @param {number} value
 */
const adjustDecimalNumber = value => {
    switch (true) {
        case !value:
            return 0;
        case value < 10:
            return Number(value.toFixed(2));
        case value < 100:
            return Number(value.toFixed(1));
        default:
            return Number(value.toFixed(0));
    }
};

export { adjustDecimalNumber };
