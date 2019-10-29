const convertJsonToValuesArray = (jsonValues) => {
    let valuesArray = Object.keys(jsonValues).map(
        function(_) {
            return jsonValues[_];
        }
    );

    return valuesArray;
}

export {
    convertJsonToValuesArray,
};