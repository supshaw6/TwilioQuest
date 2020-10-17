function getFirstAmountSorted(array, num) {
    // 1. sort input array alphabetically
    array.sort();

    // 2. return new array which is first N elements
    return(array.slice(0,num));
};