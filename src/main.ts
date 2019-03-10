import { estimateTide, fetchHarmonics } from "./tide";

// use fetchharmonics.ts to get this
// id=1495
var harmonics = require("../harmonics.json");

if (process.argv.length != 5) {
    console.log("Usage: node main.js <t_zero> <t_now> <num-days>");
} else {

    const tZero = new Date(process.argv[2]); // 26/02/2019 12:46:21
    const now = new Date(process.argv[3]); //2009-09-06T00:05:00

    var delta = now.getTime() - tZero.getTime();
    console.log("# delta", delta);
    const daysSinceEpoch = ((((delta / 1000.0) / 60.0) / 60.0) / 24.0); // millis to days

    const numDays = parseInt(process.argv[4]);
    const samplesPerDay = 24 * 12; // 5min steps
    // 0 - 1.0 = 1 day

    for (var i = 0; i < samplesPerDay * numDays; i++) {
        // calculate 100 values for next 10 days
        const tide = estimateTide(harmonics, daysSinceEpoch + (i / samplesPerDay));

        console.log(i, tide); // new Date(now.getTime() + (i / samplesPerDay) * 24.0 * 60 * 60 * 1000)
    }

}