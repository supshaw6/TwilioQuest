function calculateMass(array) {
    let totalMass = array.reduce((sum, current) => sum + current.length, 0);
    return(totalMass);
};

// fifth character: [0][4] 
// sixth character: [0][2] 