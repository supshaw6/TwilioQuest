function scan(array) {
    let outputArray = [];
    array.forEach(function(item, index, array) {
        if (item === "contraband") {
            outputArray.push(index);
        };
    });
    return(outputArray);
};

// index for second character in Infinite Loop's master password
// [3][4] 
// Obtained from "Constant Vigilance" (1)