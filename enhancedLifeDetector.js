const currentLifeStatus = Number(process.argv[2]);

if (currentLifeStatus === 0) {
    console.log("alive");
} else if (currentLifeStatus === 1) {
    console.log("flowering");
} else if (currentLifeStatus === 2) {
    console.log("shedding");
} else {
    console.log("other");
}