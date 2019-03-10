import { fetchHarmonics } from "./tide";

if (process.argv.length != 3) {
    console.log("Usage: node fetchharmonics.js <id>");
} else {
    fetchHarmonics(process.argv[2])
        .then((harmonics: number[][]) => console.log(harmonics));
}