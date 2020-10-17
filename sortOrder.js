const arg1 = String(process.argv[2]).toLowerCase();
const arg2 = String(process.argv[3]).toLowerCase();

// compare strings to see which comes first alphabetically
// < denotes "earlier in alphabet"
if (arg1 < arg2) {
    console.log(-1);
} else if (arg1 === arg2) {
    console.log(0);
} else if (arg2 < arg1) {
    console.log(1);
}