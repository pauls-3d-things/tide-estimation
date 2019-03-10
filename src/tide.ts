
import fetch from 'node-fetch';

export const fetchHarmonics = (id: string) => {
    return fetch("http://webcritech.jrc.ec.europa.eu/worldsealevelinterface/?id=" + id)
        .then(result => result.text())
        .then((text: string) => {
            const data = text.split('\n')
                .filter(line => line.startsWith("# Harmonics="))[0]
                .split(':')[1]; // remove line header # Harmonics=HARMONICS_WE:
            const harmonics = data.split('|') // separate tuples
                .filter(e => e.trim().length > 0) // remove empty values (last)
                .map(entry => entry.split(',') // separate values
                    .map(n => parseFloat(n)));
            return harmonics;
        });
}

export type TideEstimator = (harmonics: number[][], time: number) => number;

export const estimateTide: TideEstimator = (harmonics: number[][], time: number) => {
    const Pi: number = Math.PI;
    let sum: number = harmonics[0][1]; // A_0
    for (var k = 1; k < harmonics.length; k++) {
        var period: number = 2.0 * (Pi / harmonics[k][0]);
        var coefCos: number = harmonics[k][1]; // A_k
        var coefSin: number = harmonics[k][2]; // B_k
        sum += coefCos * Math.cos(time * period);
        sum += coefSin * Math.sin(time * period);
    }
    return sum;
}
