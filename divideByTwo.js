// reads in argument passed in after name of script (in command line)
const argumentValue = process.argv[2];

// you want to convert the argument to a numeric value
const numberValue = Number(argumentValue);

// divide the given number by 2
const result = numberValue / 2;

// print result to console
console.log(result);