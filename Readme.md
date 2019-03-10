## Tide Predctions with TypeScript

Details: [https://p3dt.net/post/2019/03/10/predicting-tides.html](https://p3dt.net/post/2019/03/10/predicting-tides.html)

Requirements:

- NodeJS
- Typescript
- gnuplot
- bash

The interesting code is in `src/tide.ts`.

Use 

    bash test_estimation.sh <id>

Where ID is one of the locations from http://webcritech.jrc.ec.europa.eu/SeaLevelsDb/ that provides harmonic coefficients.

One example is 1495 (France - Boulogne-Sur-Mer)

    bash test_estimation.sh 1495

Compile before running with `tsc`.

## Manual use

Taken from `test_estimation.sh`:

```bash
# get predictions from server:
curl "http://webcritech.jrc.ec.europa.eu/SeaLevelsDb/api/Device/$ID/Data?tMin=2020-01-01%2000%3A00%3A00&tMax=2020-01-30%2000%3A00%3A00&nPts=3000&field=tide" > response.json
node dist/translateResponse.js > orig.dat

# get harmonics from server:
node dist/fetchharmonics.js $ID > harmonics.json
# do predictions with locally (typescript):
node dist/main.js 1899-12-30T00:00:00Z 2020-01-01T00:05:00Z 30 > data.dat


#show result
gnuplot plot-data-dat.dem
```