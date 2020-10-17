// reads in argument passed in after name of script (in command line)
const argumentValue = process.argv[2];

const stringValue = String(argumentValue);

// check to see if user has submitted EXTEND command
if (argumentValue === "EXTEND") {
    console.log("Extending bridge!")
};