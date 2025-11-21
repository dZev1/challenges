import * as path from 'path';
import { ReadFile } from '../functions'

const relativePath: string = "./input.txt";
const completePath: string = path.resolve(__dirname, relativePath);

/*
function CountPairs(file: string): number {
    let lines: Array<string> = ReadFile(file);
    let sum = 0;
    lines.forEach((elem) => {
        let intervals: Array<string> = elem.split(',');

        let lInterval: Array<string> = intervals[0].split('-');
        let rInterval: Array<string> = intervals[1].split('-');

        const lMin: number = parseInt(lInterval[0]);
        const lMax: number = parseInt(lInterval[1]);

        const rMin: number = parseInt(rInterval[0]);
        const rMax: number = parseInt(rInterval[1]);

        const lLength = lMax - lMin;
        const rLength = rMax - rMin;
        var i;

        if (lLength <= rLength) {
            i = lMin;
            while (i <= lMax) {
                if (i >= rMin && i <= rMax) {
                    i++;
                    continue;
                }
                break;
            }
            if (i == lMax + 1) {sum++}
        } else {
            i = rMin;
            while (i <= rMax) {
                if (i >= lMin && i <= lMax) {
                    i++;
                    continue;
                }
                break;
            }
            if (i == rMax + 1) {sum++}
        }
    });

    return sum;
}
*/

function CountPairs(file: string): number {
    const lines: Array<string> = ReadFile(file);
    let sum: number = 0;

    lines.forEach((line) => {
        const parts = line.trim().split(',');
        
        const [lStr, rStr] = parts;
        const [lMin, lMax] = lStr.split('-').map(Number);
        const [rMin, rMax] = rStr.split('-').map(Number);

        const leftContainsRight = (lMin <= rMin) && (lMax >= rMax);
        const rightContainsLeft = (rMin <= lMin) && (rMax >= lMax);

        if (leftContainsRight || rightContainsLeft) sum++;
    });

    return sum;
}

function CountPairs2(file: string): number {
    const lines: Array<string> = ReadFile(file);
    let sum: number = 0;

    lines.forEach((line) => {
        const parts = line.trim().split(',');
        
        const [lStr, rStr] = parts;
        const [lMin, lMax] = lStr.split('-').map(Number);
        const [rMin, rMax] = rStr.split('-').map(Number);

        // for (let i = lMin; i <= lMax; i++) {
        //     if (i >= rMin && i <= rMax) {
        //         sum++;
        //         break;
        //     }
        // }

        const overlaps: boolean = (lMax >= rMin) && (rMax >= lMin);

        if (overlaps) sum++;
    });

    return sum;
}

const main = () => {
    console.log(CountPairs(completePath));
    console.log(CountPairs2(completePath));
};

main()