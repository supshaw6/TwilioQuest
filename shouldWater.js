const lifeStatus = Number(process.argv[2]);   // plant's life status
const drynessLevel = Number(process.argv[3]);   // plant's dryness level

if (lifeStatus === 0 && drynessLevel > 10) {
    console.log("WATER");
}