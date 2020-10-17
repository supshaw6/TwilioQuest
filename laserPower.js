function calculatePower(array) {
    // example: let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
    let power = array.map(item => item*2);

    // sum up values in power
    let powerSum = power.reduce((sum, current) => sum + current, 0);
    return(powerSum);
};
