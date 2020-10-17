function scanAndFilter(array, string) {
    // example of using filter array method:
    // let someUsers = users.filter(item => item.id < 3);
    let outputArray = array.filter(item => item !== string);
    return(outputArray);
};

// third character: [2][5] 