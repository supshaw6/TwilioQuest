const num = Number(process.argv[2]);
let output = "";

if (num % 3 === 0) {
    output += "Java";
} 

if (num % 5 === 0) {
    output += "Script";
} 

if (!(num % 3 === 0) && !(num % 5 === 0)) {
    output += String(num);
}

console.log(output);