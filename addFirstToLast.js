function addFirstToLast(array) {
    if (array.length > 0) {
        output = array[0] + array[array.length - 1];
        return(output);
    } else {
        return("");
    };
};