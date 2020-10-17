function scan(array) {
    let num = 0;
    array.forEach(element => {
        if (element === "contraband") {
            num += 1;
        };
    });
    return(num);
};

console.log(scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']));

// first character: [1][3] 