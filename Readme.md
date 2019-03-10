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
